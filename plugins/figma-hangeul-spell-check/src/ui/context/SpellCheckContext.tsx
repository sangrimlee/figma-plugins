import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { PluginMessageType } from '@/shared/enum';
import type { PluginMessageEvent, SpellCheckResult } from '@/shared/types';

import { useContent } from './ContentContext';
import { useToast } from './ToastContext';

interface SpellCheckContextValue {
  characters: string[];
  spellCheckResults: SpellCheckResult[];
  setSpellCheckResults: React.Dispatch<React.SetStateAction<SpellCheckResult[]>>;
  removeSpellCheckResult: (origin: string) => void;
}

const SpellCheckContext = createContext<SpellCheckContextValue | null>(null);
SpellCheckContext.displayName = 'SpellCheckContext';

export const useSpellCheck = () => {
  const context = useContext(SpellCheckContext);
  if (context === null) {
    throw new Error();
  }
  return context;
};

export const SpellCheckProvider = ({ children }: { children: React.ReactNode }) => {
  const toast = useToast();
  const { setPrevContent } = useContent();
  const [characters, setCharacters] = useState<string[]>([]);
  const [spellCheckResults, setSpellCheckResults] = useState<SpellCheckResult[]>([]);

  const removeSpellCheckResult = useCallback((origin: string) => {
    setSpellCheckResults((prev) => prev.filter((result) => result.origin !== origin));
  }, []);

  const contextValue = useMemo(
    () => ({ characters, spellCheckResults, setSpellCheckResults, removeSpellCheckResult }),
    [characters, spellCheckResults, removeSpellCheckResult],
  );

  useEffect(() => {
    onmessage = ({ data: { pluginMessage: msg } }: PluginMessageEvent) => {
      switch (msg.type) {
        case PluginMessageType.SET_CHARACTERS:
          setCharacters(msg.characters);
          break;
        case PluginMessageType.REPLACE_SPELL_CHECK_SUCCESS:
          setPrevContent();
          toast({
            type: 'success',
            title: '맞춤법에 맞게 모두 수정되었습니다.',
          });
          break;
        default:
          break;
      }
    };
    return () => {
      onmessage = null;
    };
  }, [toast, setPrevContent]);

  return <SpellCheckContext.Provider value={contextValue}>{children}</SpellCheckContext.Provider>;
};
