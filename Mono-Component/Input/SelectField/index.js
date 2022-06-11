import React from "react";

const SelectField = ({ option, name, classname }) => {
  return (
    <div>
      <select name={name} className={`${classname}`}>
        {option.map((item, key) => (
          <option key={key} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
