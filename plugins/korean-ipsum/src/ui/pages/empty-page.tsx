import { Flex, NodeBadge, Text } from '@figma-plugins/ui';

export function EmptyPage() {
  return (
    <Flex
      as="main"
      css={{ height: '100vh', paddingBottom: '$400' }}
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
  );
}
