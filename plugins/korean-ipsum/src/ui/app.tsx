import { Flex, Loader, colors, globalStyles } from '@figma-plugins/ui';
import { FormPage, MainPage } from './pages';
import { useMessageEventListener } from './hooks';
import { useGlobalStore } from './store';

export function App() {
  const { isLoading } = useMessageEventListener();
  const isSelectedTextNode = useGlobalStore(
    (state) => state.isSelectedTextNode,
  );
  globalStyles();

  if (isLoading) {
    return (
      <Flex css={{ height: '100vh' }} items="center" justify="center">
        <Loader
          animate
          css={{
            color: colors.icon.secondary.default,
          }}
          height="24"
          width="24"
        />
      </Flex>
    );
  }

  return <>{isSelectedTextNode ? <FormPage /> : <MainPage />}</>;
}
