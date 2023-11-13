import type { SpellCheckResult } from '@/shared/types';
import { loadFont } from './load-font';
import { postFigmaPluginMessage } from './plugin-message';

function replaceCharacters(
  character: string,
  spellCheckResults: SpellCheckResult[],
) {
  return spellCheckResults.reduce(
    (prev, result) => prev.replaceAll(result.origin, result.correct),
    character,
  );
}

async function replaceTextNode(
  textNode: TextNode,
  spellCheckResults: SpellCheckResult[],
) {
  await loadFont(textNode);
  textNode.characters = replaceCharacters(
    textNode.characters,
    spellCheckResults,
  );
}

export function replaceBySpellCheckResults(
  textNodes: TextNode[],
  spellCheckResults: SpellCheckResult[],
) {
  Promise.all(
    textNodes.map((textNode) => replaceTextNode(textNode, spellCheckResults)),
  )
    .then(() => {
      postFigmaPluginMessage({
        type: 'RUN_SPELL_CHECK_SUCCESS',
      });
    })
    .catch(() => {
      postFigmaPluginMessage({
        type: 'RUN_SPELL_CHECK_FAILED',
      });
    });
}
