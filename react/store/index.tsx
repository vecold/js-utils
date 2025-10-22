// example react/store/index.tsx
import {
  withStoreProvider,
  useStore
} from "./state";
const Index = () => {
  const { state, setRefState } = useStore();
  return <div />;
};

export default withStoreProvider(Index);
