import React from "react";
import { withTheme } from "styled-components";
import { FormStyles } from "./form.style";

const Form = ({ theme: { Color }, FormArray, HandleSubmit, HandleChange }) => {
  return (
    <FormStyles Color={Color}>
      <form onSubmit={HandleSubmit}>
        {FormArray.map((item, key) => (
          <div key={key} className={item.classbody}>
            <label className={`${item.labelclassname}`}>{item.label}</label>
            {item.type !== "submit" ? (
              <input
                style={{ width: `${item.width}` }}
                type={item.type}
                placeholder={item.placeholder}
                name={item.name}
                onChange={HandleChange}
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
      </form>
    </FormStyles>
  );
};

export default withTheme(Form);
