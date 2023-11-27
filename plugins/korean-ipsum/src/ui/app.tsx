import { globalStyles } from '@figma-plugins/ui';
import { FormPage, MainPage } from './pages';
import { useMessageEventListener } from './hooks';
import { useGlobalStore } from './store';

export function App() {
  const isSelectedTextNode = useGlobalStore(
    (state) => state.isSelectedTextNode,
  );

  globalStyles();
  useMessageEventListener();

  return <>{isSelectedTextNode ? <FormPage /> : <MainPage />}</>;
}
