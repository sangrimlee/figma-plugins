import { Flex, Loader, colors } from '@figma-plugins/ui';

export function LoadingPage() {
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
