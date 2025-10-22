import { createStore } from "./createStore";
import { useSetState } from "ahooks";

export const useMaterialStore = () => {
  
 const [
    state,
    setRefState,
  ] = useSetState({
    a: 0,
    b: 0,
    c: 0
  })
  return {
    state,
    setRefState,
  };
};

export const {
  useStore,
  withStoreProvider
} = createStore(useMaterialStore);
