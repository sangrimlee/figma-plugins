import { createContext, useContext, useMemo, useState } from 'react';

import type { CodeFormat, CodeLanguage } from '@/shared/types';

import { CODE_LANGUAGE_MAP } from '../constants/code';

interface FormContextValue {
  code: string;
  format: CodeFormat;
  language: CodeLanguage;
  setCode: (code: string) => void;
  setFormat: (style: CodeFormat) => void;
}

const FormContext = createContext<FormContextValue | null>(null);
FormContext.displayName = 'FormContext';

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === null) {
    throw new Error();
  }
  return context;
};

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [format, setFormat] = useState<CodeFormat>('css');
  const [code, setCode] = useState<string>('');

  const contextValue = useMemo(
    () => ({
      code,
      format,
      setCode,
      setFormat,
      language: CODE_LANGUAGE_MAP[format],
    }),
    [code, format],
  );

  return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>;
};
