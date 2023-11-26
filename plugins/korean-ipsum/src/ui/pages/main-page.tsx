import { Box, Flex, NodeBadge, Text } from '@figma-plugins/ui';

export function MainPage() {
  return (
    <Flex
      css={{ height: '100vh', padding: '$300', position: 'relative' }}
      direction="column"
    >
      <Box as="header">
        <Text size="sm" weight="semibold">
          한글입숨
        </Text>
      </Box>
      <Flex
        as="main"
        css={{ flex: 1, paddingBottom: '$500' }}
        direction="column"
        items="center"
        justify="center"
      >
        <Flex gap="100" items="center">
          <Text as="span" size="sm">
            텍스트를 생성하고자 하는
          </Text>
          <NodeBadge nodeType="text" />
          <Text as="span" size="sm">
            선택해주세요.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
