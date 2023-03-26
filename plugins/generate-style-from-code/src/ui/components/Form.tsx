import { useMemo, useState } from 'react';

import type { CodeStyle } from '@/shared/types';

import { CODE_LANGUAGE_MAP } from '../constants/code';
import CodeEditor from './CodeEditor';
import SelectCodeStyle from './SelectCodeStyle';

const sample = `import { highlight, languages } from 'prismjs';
import { useCallback } from 'react';
import Editor from 'react-simple-code-editor';

interface CodeEditorProps {
  value: string;
  onValueChange: (value: string) => void;
  language: string;
}

const CodeEditor = ({ value, onValueChange, language }: CodeEditorProps) => {
  const highlightCode = useCallback((code: string) => highlight(code, languages[language], language), [language]);

  return (
    <div className="code-editor">
      <Editor
        value={value}
        onValueChange={onValueChange}
        highlight={highlightCode}
        padding={12}
        tabSize={2}
        insertSpaces
        placeholder="Please enter your code."
        textareaClassName="focus:outline-none"
        style={{
          fontSize: '0.75rem',
        }}
      />
    </div>
  );
};

export default CodeEditor;`;

const Form = () => {
  const [code, setCode] = useState<string>(sample);
  const [codeStyle, setCodeStyle] = useState<CodeStyle>('css');
  const codeLanguage = useMemo(() => CODE_LANGUAGE_MAP[codeStyle], [codeStyle]);

  return (
    <div className="flex flex-col gap-y-3">
      <SelectCodeStyle name="language" value={codeStyle} onValueChange={setCodeStyle} />
      <CodeEditor value={code} onValueChange={setCode} language={codeLanguage} />
    </div>
  );
};

export default Form;
