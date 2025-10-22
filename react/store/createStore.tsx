import React, { createContext, useContext } from "react";
import type { PropsWithChildren, ReactNode } from "react";

export function createStore<TStore>(initializer: () => TStore) {
  const StoreContext = createContext<TStore>({} as TStore);

  // Provider 组件
  function StoreProvider({ children }: { children: ReactNode }) {
    const store = initializer();
    return (
      <StoreContext.Provider value={store}>
        {children}
      </StoreContext.Provider>
    );
  }

  // Hook：获取 store
  function useStore(): TStore {
    const store = useContext(StoreContext);
    if (!store) {
      throw new Error("useStore must be used within a StoreProvider");
    }
    return store;
  }

  // 高阶组件：自动包裹 Provider
  function withStoreProvider(
    Component: (props: unknown) => ReactNode
  ): React.FC<PropsWithChildren> {
    return function (props: unknown) {
      return <StoreProvider>{Component(props)}</StoreProvider>;
    };
  }

  return { useStore, withStoreProvider };
}
