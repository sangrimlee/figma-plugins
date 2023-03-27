import CodeEditor from './CodeEditor';
import SelectCodeStyle from './SelectCodeStyle';

const Form = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <SelectCodeStyle />
      <CodeEditor />
      <div className="mt-2 flex items-center justify-end gap-x-3">
        <button
          type="button"
          className=" bg-figma-bg-brand text-figma-text-onbrand hover:bg-figma-bg-brand-hover disabled:bg-figma-bg-disabled rounded-md px-4 py-2 font-medium transition-colors disabled:pointer-events-none"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Form;
