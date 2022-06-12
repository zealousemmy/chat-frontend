import React from "react";

const InputField = ({ type, HandleChange, classname, placeholder, name }) => {
  return (
    <div>
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

export default InputField;
