import manifest from 'manifest.json';
import type { GenerateFormState, UIPluginMessage } from '@/shared/types';
import { postFigmaPluginMessage } from './utils/plugin-message';
import { isTextNode } from './utils/check-node';
import { getClientStorage, setClientStorage } from './utils/client-storage';

figma.showUI(__html__, {
  title: manifest.name,
  themeColors: true,
  width: 384,
  height: 432,
});

figma.on('selectionchange', () => {
  postFigmaPluginMessage({
    type: 'ON_CHANGE_SELECTION',
    isSelectedTextNode: figma.currentPage.selection.some(isTextNode),
  });
});

async function messageEventHandler(msg: UIPluginMessage) {
  switch (msg.type) {
    case 'INIT':
      postFigmaPluginMessage({
        type: 'ON_INIT',
        isSelectedTextNode: figma.currentPage.selection.some(isTextNode),
        formState: await getClientStorage<GenerateFormState>('FORM_STATE', {
          source: 'countingStars',
          unit: 'word',
          count: '1',
          method: 'replace',
        }),
      });
      break;
    case 'ON_CHANGE_FORM_STATE':
      await setClientStorage('FORM_STATE', msg.formState);
      break;
    default:
      break;
  }
}

figma.ui.onmessage = (msg: UIPluginMessage) => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises -- TODO: Add handling Errors
  messageEventHandler(msg);
};
