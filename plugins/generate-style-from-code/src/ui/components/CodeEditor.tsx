// eslint-disable-next-line simple-import-sort/imports
import Prism from 'prismjs';
import { useCallback } from 'react';
import Editor from 'react-simple-code-editor';

import { useForm } from '../contexts/FormContext';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-css';

const CodeEditor = () => {
  const { code, language, setCode } = useForm();

  const highlightCode = useCallback(
    (value: string) => {
      return Prism.highlight(value, Prism.languages[language], language);
    },
    [language],
  );

  return (
    <div className="code-editor border-figma-border ring-figma-bg-brand max-h-[32rem] overflow-auto rounded-md border font-mono focus-within:ring-2">
      <Editor
        value={code}
        onValueChange={setCode}
        highlight={highlightCode}
        padding={12}
        tabSize={2}
        insertSpaces
        placeholder="Please enter your code."
        className="min-h-[30rem] text-sm"
        textareaClassName="focus:outline-none"
      />
    </div>
  );
};

export default CodeEditor;
