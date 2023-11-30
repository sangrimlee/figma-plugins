import { globalStyles } from '@figma-plugins/ui';
import { useGlobalStore } from './store';
import { useInitEvent, useSelectionChangeEvent } from './hooks';
import { EmptyPage, LoadingPage, TabsPage } from './pages';

export function App() {
  const isLoading = useInitEvent();
  const isSelected = useGlobalStore((state) => state.isSelectedTextNode);
  globalStyles();
  useSelectionChangeEvent();

  if (isLoading) {
    return <LoadingPage />;
  }

  return isSelected ? <TabsPage /> : <EmptyPage />;
}
