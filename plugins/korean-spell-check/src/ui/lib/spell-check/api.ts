import { http } from '../../utils/http';
import { getSpellCheckeResult } from './helpers/get-spell-check-result';

const SPELL_CHECK_URL =
  'https://m.search.naver.com/p/csearch/ocontent/util/SpellerProxy';

const PASSPORT_KEY_URL = 'https://search.naver.com/search.naver';

export interface SpellCheckResponse {
  message: {
    error?: string;
    result: {
      errata_count: number;
      origin_html: string;
      html: string;
      notag_html: string;
    };
  };
}

export async function requestSpellCheck(query: string, passportKey: string) {
  const res = await http(SPELL_CHECK_URL, {
    method: 'GET',
    params: {
      q: query,
      passportKey,
      color_blindness: 0,
    },
  });

  const {
    message: { error, result },
  } = (await res.json()) as SpellCheckResponse;

  if (error) {
    throw new Error(error);
  }

  return getSpellCheckeResult(result.origin_html, result.html);
}

export async function requestPassportKey() {
  const res = await http(PASSPORT_KEY_URL, {
    method: 'GET',
    proxy: true,
    params: {
      query: '맞춤법검사',
    },
  });

  const html = await res.text();
  const matched = /passportKey=(?<passport-key>[a-zA-Z0-9]+)/.exec(html);
  if (!matched) {
    throw new Error('FIND_PASSPORT_KEY_FAILED');
  }
  return matched[1];
}
