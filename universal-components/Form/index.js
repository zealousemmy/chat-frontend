import React from "react";
import { useState } from "react";
import { withTheme } from "styled-components";
import { FormStyles, MultipleInputDiv } from "./form.style";

const Form = ({
  theme: { Color },
  FormArray,
  HandleSubmit,
  HandleChange,
  passClick,
  passwordShow,
  width,
  signature,
}) => {
  return (
    <FormStyles Color={Color} width={width} signature={signature}>
      <form onSubmit={HandleSubmit}>
        {FormArray.map((item, key) => (
          <div key={key} className={item.classbody}>
            <label className={`${item.labelclassname}`}>{item.label}</label>
            {item.type !== "submit" ? (
              <div>
                {!item.multiple_input ? (
                  <div>
                    <input
                      style={{ width: `${item.width}` }}
                      type={item.type}
                      placeholder={item.placeholder}
                      name={item.name}
                      onChange={HandleChange}
                      className={`${item.classname}`}
                    />
                    {!passwordShow
                      ? item.iconShow && (
                          <div className={item.classicon} onClick={passClick}>
                            <item.iconShow className={item.classiconitem} />
                          </div>
                        )
                      : item.iconRemove && (
                          <div className={item.classicon} onClick={passClick}>
                            <item.iconRemove className={item.classiconitem} />
                          </div>
                        )}
                  </div>
                ) : (
                  <MultipleInputDiv
                    Color={Color}
                    Arr={item.multiple_input.length}
                    width={width}
                    signature={signature}
                  >
                    {item.multiple_input?.map((item, key) => (
                      <div key={key} className={"mulitple"}>
                        <div className={"mulitples"}>
                          <label className={`${item.labelclassname}`}>
                            {item.label}
                          </label>
                          <input
                            key={key}
                            type={item.type}
                            placeholder={item.placeholder}
                            name={item.name}
                            onChange={HandleChange}
                            className={`${item.classname}`}
                          />
                        </div>
                        {!passwordShow
                          ? item.iconShow && (
                              <div
                                className={item.classicon}
                                onClick={passClick}
                              >
                                <item.iconShow className={item.classiconitem} />
                              </div>
                            )
                          : item.iconRemove && (
                              <div
                                className={item.classicon}
                                onClick={passClick}
                              >
                                <item.iconRemove
                                  className={item.classiconitem}
                                />
                              </div>
                            )}
                      </div>
                    ))}
                  </MultipleInputDiv>
                )}
              </div>
            ) : (
              <input
                type={item.type}
                value={item.value}
                className={`${item.classname}`}
              />
            )}
            <div>
              {item.description && (
                <textarea
                  cols={item.cols}
                  rows={item.rows}
                  placeholder={item.placeholder}
                  name={item.name}
                  onChange={HandleChange}
                  className={`${item.classname}`}
                ></textarea>
              )}
            </div>
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
