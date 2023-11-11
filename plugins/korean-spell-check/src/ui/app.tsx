import { globalStyles } from '@figma-plugins/ui';
import { MainPage, ResultPage } from './pages';
import { useGlobalStore } from './store';
import { useMessageEventListener } from './hooks';

export function App() {
  const contentType = useGlobalStore((state) => state.contentType);
  globalStyles();
  useMessageEventListener();

  return <>{contentType !== 'result' ? <MainPage /> : <ResultPage />}</>;
}
