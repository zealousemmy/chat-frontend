import Image from "next/image";
import React from "react";

const InputFile = ({
  name,
  placeholder,
  type,
  HandleChange,
  classname,
  filename,
  image,
  file_text,
  classdiv,
  classcontent,
}) => {
  return (
    <div className={`${classdiv}`}>
      <div className={`${classcontent}`}>
        {image && (
          <div>
            <Image src={image} alt={file_text} width={"24px"} height={"24px"} />
          </div>
        )}
        <div>
          <p>{!filename ? file_text : filename}</p>
        </div>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={HandleChange}
        className={`${classname}`}
      />
    </div>
  );
};

export default InputFile;
