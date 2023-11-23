import {
  Button,
  Flex,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Loader,
  NodeBadge,
} from '@figma-plugins/ui';
import { BoxIcon, LayersIcon } from '@radix-ui/react-icons';
import type { ContentType } from '@/shared/types';
import { useGlobalStore } from '../store';
import { useSpellCheck } from '../hooks';

function PageContent() {
  return (
    <Flex
      css={{ height: '$full', fontSize: '$sm' }}
      direction="column"
      gap="150"
      items="center"
      justify="center"
    >
      <Flex gap="100" items="center">
        <span>현재 페이지의 모든</span>
        <NodeBadge nodeType="text" />
        <NodeBadge nodeType="frame" />
      </Flex>
      <Flex gap="100" items="center">
        <NodeBadge nodeType="group" />
        <span>에 대해서 맞춤법 검사를 실행합니다.</span>
      </Flex>
    </Flex>
  );
}

function LayerContent() {
  const characters = useGlobalStore((state) => state.characters);

  return (
    <Flex
      css={{ height: '$full', fontSize: '$sm' }}
      direction="column"
      gap="150"
      items="center"
      justify="center"
    >
      {characters.length === 0 ? (
        <>
          <Flex gap="100" items="center">
            <span>선택한</span>
            <NodeBadge nodeType="text" />
            <NodeBadge nodeType="frame" />
          </Flex>
          <Flex gap="100" items="center">
            <NodeBadge nodeType="group" />
            <span>에 대해서 맞춤법 검사를 실행합니다.</span>
          </Flex>
        </>
      ) : (
        <Flex gap="100" items="center">
          <span>{characters.length}개의</span>
          <NodeBadge nodeType="text" />
          <span>가 선택되었습니다.</span>
        </Flex>
      )}
    </Flex>
  );
}

export function MainPage() {
  const contentType = useGlobalStore((state) => state.contentType);
  const changeContentType = useGlobalStore((state) => state.changeContentType);
  const { isLoading, getSpellCheckResults } = useSpellCheck();

  return (
    <Flex as="main" css={{ height: '100vh' }} direction="column">
      <Tabs
        css={{ flex: 1 }}
        onValueChange={(v) => {
          changeContentType(v as ContentType);
        }}
        value={contentType}
      >
        <TabsList>
          <TabsTrigger value="page">
            <BoxIcon height={14} width={14} />
            <span>Page</span>
          </TabsTrigger>
          <TabsTrigger value="layer">
            <LayersIcon height={14} width={14} />
            <span>Layer</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="page">
          <PageContent />
        </TabsContent>
        <TabsContent value="layer">
          <LayerContent />
        </TabsContent>
      </Tabs>
      <Flex css={{ padding: '$300' }} direction="column">
        <Button
          aria-label="맞춤법 검사하기"
          disabled={isLoading}
          onClick={getSpellCheckResults}
          size="md"
          type="button"
          variant="brand"
        >
          {isLoading ? <Loader animate css={{ marginRight: '$200' }} /> : null}
          <span>검사하기</span>
        </Button>
      </Flex>
    </Flex>
  );
}
