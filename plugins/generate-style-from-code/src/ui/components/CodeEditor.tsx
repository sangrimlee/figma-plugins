// eslint-disable-next-line simple-import-sort/imports
import Prism from 'prismjs';
import { useCallback } from 'react';
import Editor from 'react-simple-code-editor';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-css';

interface CodeEditorProps {
  value: string;
  onValueChange: (value: string) => void;
  language: string;
}

const CodeEditor = ({ value, onValueChange, language }: CodeEditorProps) => {
  const highlightCode = useCallback(
    (code: string) => {
      return Prism.highlight(code, Prism.languages[language], language);
    },
    [language],
  );

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
        preClassName={`language-${language}`}
        style={{ fontSize: '0.875rem', minHeight: '20rem' }}
      />
    </div>
  );
};

export default CodeEditor;
