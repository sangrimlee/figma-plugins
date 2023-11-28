import type { GenerateFormState, UIPluginMessage } from '@/shared/types';
import { getClientStorage, setClientStorage } from './utils/client-storage';
import { postFigmaPluginMessage } from './utils/plugin-message';
import { isTextNode } from './utils/check-node';

function getIsSelectedTextNode() {
  return figma.currentPage.selection.some(isTextNode);
}

function getFormStateFromClientStorage(): Promise<GenerateFormState> {
  return getClientStorage('FORM_STATE', {
    source: 'countingStars',
    unit: 'word',
    count: '1',
    method: 'replace',
  });
}

export function selectionChangeHandler() {
  postFigmaPluginMessage({
    type: 'ON_CHANGE_SELECTION',
    isSelectedTextNode: getIsSelectedTextNode(),
  });
}

export async function messageEventHandler(msg: UIPluginMessage) {
  switch (msg.type) {
    case 'INIT':
      postFigmaPluginMessage({
        type: 'ON_INIT',
        isSelectedTextNode: getIsSelectedTextNode(),
        formState: await getFormStateFromClientStorage(),
      });
      return;
    case 'ON_CHANGE_FORM_STATE':
      return setClientStorage('FORM_STATE', msg.formState);
    default:
      break;
  }
}
