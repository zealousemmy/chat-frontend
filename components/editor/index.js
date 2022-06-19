import React, { useCallback, useEffect, useRef, useState } from "react";
import EditorJs, { createReactEditorJS } from "react-editor-js";
import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Embed from "@editorjs/embed";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Header from "@editorjs/header";
import Marker from "@editorjs/marker";

const ReactEditorJS = createReactEditorJS();

const Editor = ({ data, handleInstance }) => {
  const [blocks] = useState([]);
  const editorJs = useRef(null);

  // const [editor, setEditor] = useState([]);
  // useEffect(() => {
  //   if (editor.length != 0) {
  //     editor.destroy();
  //   }
  // }, []);

  const EDITOR_JS_TOOLS = {
    logLevel: "ERROR",
    isReady: () => {},
    header: Header,
    checklist: CheckList,
    code: Code,
    quote: Quote,
    embed: Embed,
    paragraph: {
      config: {
        placeholder: "Tell your story ... maximum of 700 characters",
      },
    },
    list: List,
    marker: Marker,
  };

  const handleInitialize = useCallback((instance) => {
    editorJs.current = instance;
  }, []);

  const handleSave = useCallback(async () => {
    const savedData = await editorJs.current.save();
  }, []);

  return (
    <>
      {typeof window !== "undefined" ? (
        <ReactEditorJS
          logLevel={"ERROR"}
          defaultValue={{ blocks }}
          onInititalize={handleInitialize}
          tools={EDITOR_JS_TOOLS}
        />
      ) : null}
    </>
  );
};

export default Editor;
