import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./editorList";
import { useState, useEffect } from "react";

const REACT_EDITOR_HOLDER_ID = "ssrHolder";

const CustomEditor = ({ data, imageArray, handleInstance }) => {
  const [tools, setTools] = useState();

  useEffect(() => {
    setTools(EDITOR_JS_TOOLS);
  }, []);

  if (!tools) {
    return <h2>Loading...</h2>;
  }

  return (
    <EditorJs
      holder={REACT_EDITOR_HOLDER_ID}
      tools={tools}
      data={data}
      placeholder={`Write from here...`}
    />
  );
};

// Return the CustomEditor to use by other components.

export default CustomEditor;
