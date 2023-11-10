import { globalStyles } from '@figma-plugins/ui';
import { MainPage, ResultPage } from './pages';
import { useGlobalStore } from './store';

export function App() {
  globalStyles();

  const contentType = useGlobalStore((state) => state.contentType);

  return <>{contentType !== 'result' ? <MainPage /> : <ResultPage />}</>;
}
