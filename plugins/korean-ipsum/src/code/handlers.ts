import type { GenerateFormState, UIPluginMessage } from '@/shared/types';
import { generateContent } from '@/shared/generate';
import { getClientStorage, setClientStorage } from './utils/client-storage';
import { postFigmaPluginMessage } from './utils/plugin-message';
import { isTextNode } from './utils/check-node';
import { loadFont } from './utils/load-font';

const DELIMITER = {
  word: ' ',
  sentence: '\n',
  paragraph: '\n\n',
} as const;

async function changeTextNodeCharacters(
  textNode: TextNode,
  formState: GenerateFormState,
) {
  await loadFont(textNode);
  const content = generateContent(formState);
  if (formState.method === 'replace' || textNode.characters.length === 0) {
    textNode.characters = content;
  } else {
    textNode.characters = `${textNode.characters}${
      DELIMITER[formState.unit]
    }${content}`;
  }
}

function changeSelectionCharacters(formState: GenerateFormState) {
  const textNodes = figma.currentPage.selection.filter(isTextNode);
  return Promise.all(
    textNodes.map((textNode) => changeTextNodeCharacters(textNode, formState)),
  );
}

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
      await setClientStorage('FORM_STATE', msg.formState);
      break;
    case 'GENERATE_CONTENT':
      await changeSelectionCharacters(msg.formState);
      postFigmaPluginMessage({
        type: 'GENERATE_CONTENT_FINISHED',
      });
      break;
    default:
      break;
  }
}
