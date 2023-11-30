import {
  Flex,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@figma-plugins/ui';
import { useState } from 'react';
import { MagicWandIcon, TextIcon } from '@radix-ui/react-icons';
import { FormPage } from './form-page';
import { AutoFormPage } from './auto-form-page';

export function TabsPage() {
  const [tab, setTab] = useState<string>('manual');

  return (
    <Flex as="main" css={{ height: '100vh' }} direction="column">
      <Tabs css={{ flex: 1 }} onValueChange={setTab} value={tab}>
        <TabsList>
          <TabsTrigger css={{ flex: 1 }} value="manual">
            <TextIcon height={14} width={14} />
            <span>한글입숨</span>
          </TabsTrigger>
          <TabsTrigger css={{ flex: 1 }} value="auto">
            <MagicWandIcon height={14} width={14} />
            <span>자동생성</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="manual">
          <FormPage />
        </TabsContent>
        <TabsContent value="auto">
          <AutoFormPage />
        </TabsContent>
      </Tabs>
    </Flex>
  );
}
