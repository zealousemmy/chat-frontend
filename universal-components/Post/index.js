import Image from "next/image";
import React, { useState, useEffect } from "react";
import { withTheme } from "styled-components";
import { PostStyles } from "./post.style";
import Textarea from "../../Mono-Component/Input/TextArea";
import SelectField from "../../Mono-Component/Input/SelectField";
import SubmitField from "../../Mono-Component/Input/SubmitField";
import InputFile from "../../Mono-Component/Input/InputFile";
// import Editor from "../../components/editor";
import dynamic from "next/dynamic";

let Editor = dynamic(() => import("../../components/editor"), {
  ssr: false,
});

const Post = ({ PostArray, theme: { Color }, filename, HandleChange }) => {
  const [editorLoaded, setEditorLoaded] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  return (
    <PostStyles Color={Color}>
      <form>
        {PostArray.map((item, key) => (
          <div key={key} className={`${item.classbody}`}>
            <label className={`${item.labelclassname}`}>{item.label}</label>
            {item.type === "submit" ? (
              <div>
                <SubmitField
                  type={item.type}
                  value={item.value}
                  classname={`${item.classname}`}
                />
              </div>
            ) : item.type === "file" ? (
              <InputFile
                classdiv={"filebodycontent"}
                classcontent={"filecontent"}
                ImageBuilder={item.image}
                file_text={item.file_text}
                filename={filename}
                type={item.type}
                placeholder={item.placeholder}
                name={item.name}
                classname={item.classname}
                HandleChange={HandleChange}
              />
            ) : !item.type ? (
              <div>
                {item.description ? (
                  <Textarea
                    cols={item.cols}
                    rows={item.rows}
                    placeholder={item.placeholder}
                    name={item.name}
                    //   onChange={HandleChange}
                    classname={`${item.classname}`}
                  />
                ) : (
                  <SelectField
                    option={item.option}
                    name={item.name}
                    classname={`${item.classname}`}
                  />
                )}
              </div>
            ) : (
              <>
                {/* <input
                  style={{ width: `${item.width}` }}
                  type={item.type}
                  placeholder={item.placeholder}
                  name={item.name}
                  //   onChange={HandleChange}
                  className={`${item.classname}`}
                /> */}
                <Editor />

                {JSON.stringify(data)}
              </>
            )}
          </div>
        ))}
      </form>
    </PostStyles>
  );
};

export default withTheme(Post);
