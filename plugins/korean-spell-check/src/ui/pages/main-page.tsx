import {
  Box,
  Button,
  Flex,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  animations,
} from '@figma-plugins/ui';
import { BoxIcon, LayersIcon } from '@radix-ui/react-icons';
import type { ContentType } from '@/shared/types';
import { LoaderIcon, NodeBadge } from '../components';
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
      <Flex items="center">
        현재 페이지의 모든
        <NodeBadge type="text" />
        <NodeBadge type="frame" />
      </Flex>
      <Flex items="center">
        <NodeBadge type="group" />에 대해서 맞춤법 검사를 실행합니다.
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
          <Flex items="center">
            선택한
            <NodeBadge type="text" />
            <NodeBadge type="frame" />
            <br />
          </Flex>
          <Flex items="center">
            <NodeBadge type="group" />에 대해서 맞춤법 검사를 실행합니다.
          </Flex>
        </>
      ) : (
        <Flex items="center">
          {characters.length}개의
          <NodeBadge type="text" />가 선택되었습니다.
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
          {isLoading ? (
            <Box
              as={LoaderIcon}
              css={{
                animation: `${animations.spin.name} 1s linear infinite`,
                marginRight: '$200',
              }}
            />
          ) : null}
          <span>검사하기</span>
        </Button>
      </Flex>
    </Flex>
  );
}
