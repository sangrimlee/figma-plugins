import { Flex, Loader, colors, globalStyles } from '@figma-plugins/ui';
import { FormPage, MainPage } from './pages';
import { useInitEvent, useSelectionChangeEvent } from './hooks';
import { useGlobalStore } from './store';

export function App() {
  const isLoading = useInitEvent();
  const isSelectedTextNode = useGlobalStore(
    (state) => state.isSelectedTextNode,
  );

  globalStyles();
  useSelectionChangeEvent();

  if (isLoading) {
    return (
      <Flex
        css={{ height: '100vh', color: colors.icon.secondary.default }}
        items="center"
        justify="center"
      >
        <Loader animate height="24" width="24" />
      </Flex>
    );
  }

  return <>{isSelectedTextNode ? <FormPage /> : <MainPage />}</>;
}
