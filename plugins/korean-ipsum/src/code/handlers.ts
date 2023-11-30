import type {
  GenerateFormState,
  GenerateSource,
  UIPluginMessage,
} from '@/shared/types';
import { generateByForm, generateBySize } from '@/shared/generate';
import { getClientStorage, setClientStorage } from './utils/client-storage';
import { postFigmaPluginMessage } from './utils/plugin-message';
import { isTextNode } from './utils/check-node';
import { changeCharacters, getCharacterSizes } from './utils/text-node';

const DELIMITER = {
  word: ' ',
  sentence: '\n',
  paragraph: '\n\n',
} as const;

async function generate(textNode: TextNode, formState: GenerateFormState) {
  const content = generateByForm(formState);
  await changeCharacters(
    textNode,
    content,
    formState.method,
    DELIMITER[formState.unit],
  );
}

async function autoGenerate(textNode: TextNode, source: GenerateSource) {
  const { width, height } = textNode;
  const characterSize = await getCharacterSizes(textNode);
  const content = generateBySize(source, width, height, characterSize);
  await changeCharacters(textNode, content, 'replace');
}

function handleGenerateContent(formState: GenerateFormState) {
  const textNodes = figma.currentPage.selection.filter(isTextNode);
  return Promise.all(
    textNodes.map((textNode) => generate(textNode, formState)),
  );
}

async function handleAutoGenerateContent(source: GenerateSource) {
  const textNodes = figma.currentPage.selection.filter(isTextNode);
  return Promise.all(
    textNodes.map((textNode) => autoGenerate(textNode, source)),
  );
}

function getIsSelectedTextNode() {
  return figma.currentPage.selection.some(isTextNode);
}

function getFormStateFromClientStorage(): Promise<GenerateFormState> {
  return getClientStorage('FORM_STATE', {
    source: 'countingStars',
    unit: 'word',
    count: 1,
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
      await handleGenerateContent(msg.formState);
      postFigmaPluginMessage({
        type: 'GENERATE_CONTENT_FINISHED',
      });
      break;
    case 'AUTO_GENERATE_CONTENT':
      await handleAutoGenerateContent(msg.source);
      postFigmaPluginMessage({
        type: 'GENERATE_CONTENT_FINISHED',
      });
      break;
    default:
      break;
  }
}
