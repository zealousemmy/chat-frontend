import EditorJs, { createReactEditorJS } from "react-editor-js";
import { useCallback, useRef, useState, useEffect } from "react";
import { EDITOR_JS_TOOLS } from "./editorList";

const ReactEditorJS = createReactEditorJS();
const REACT_EDITOR_HOLDER_ID = "ssrHolder";

const EditorForm = ({ data }) => {
  const editorCore = useRef(null);
  const [tools, setTools] = useState({});

  useEffect(() => {
    if (Object.keys(tools).length != 0) {
      tools.destroy();
    }
    setTools(new EditorJs({}));
  }, []);

  if (!tools) {
    return <>Loading....</>;
  }

  const handleInitialize = (instance) => {
    editorCore.current = instance;
  };

  const handleSave = async () => {
    const savedData = await editorCore.current.save();
  };
  return (
    <div>
      <ReactEditorJS
        // defaultValue={blocks}
        // onInitialize={handleInitialize}
        tools={tools}
        // tools={EDITOR_JS_TOOLS}
        placeholder="write something here..."
      />
    </div>
  );
};

export default EditorForm;
