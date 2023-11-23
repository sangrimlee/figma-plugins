import { Flex } from '@figma-plugins/ui';
import type { Decorator } from '@storybook/react';

interface LayoutProps {
  children: React.ReactNode;
}

function DocsLayout({ children }: LayoutProps) {
  return (
    <Flex
      css={{
        minHeight: '16rem',
        alignContent: 'center',
        padding: '$1000',
      }}
      gap="400"
      items="center"
      justify="center"
      wrap="wrap"
    >
      {children}
    </Flex>
  );
}

function StoryLayout({ children }: LayoutProps) {
  return (
    <Flex
      css={{
        alignContent: 'center',
        padding: '$500',
      }}
      gap="400"
      items="center"
      wrap="wrap"
    >
      {children}
    </Flex>
  );
}

export const withLayout: Decorator = (StoryFn, context) => {
  const Layout = context.viewMode === 'docs' ? DocsLayout : StoryLayout;

  return (
    <Layout>
      <StoryFn />
    </Layout>
  );
};
