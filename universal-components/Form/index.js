import React from "react";
import { withTheme } from "styled-components";
import { FormStyles } from "./form.style";

const Form = ({ theme: { Color }, FormArray }) => {
  return (
    <FormStyles Color={Color}>
      {FormArray.map((item, key) => (
        <div key={key} className={item.classbody}>
          <label className={`${item.labelclassname}`}>{item.label}</label>
          {item.type !== "submit" ? (
            <input
              style={{ width: `${item.width}` }}
              type={item.type}
              placeholder={item.placeholder}
              name={item.name}
              onChange={() => {}}
              className={`${item.classname}`}
            />
          ) : (
            <input
              type={item.type}
              value={item.value}
              className={`${item.classname}`}
            />
          )}
          <div className={`${item.classdescription}`}>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </FormStyles>
  );
};

export default withTheme(Form);
