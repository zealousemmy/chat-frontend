import React from "react";
import { useState } from "react";
import { withTheme } from "styled-components";
import InputField from "../../Mono-Component/Input/InputField";
import SelectField from "../../Mono-Component/Input/SelectField";
import SubmitField from "../../Mono-Component/Input/SubmitField";
import Textarea from "../../Mono-Component/Input/TextArea";
import { FormStyles, MultipleInputDiv } from "./form.style";
import InputFile from "../../Mono-Component/Input/InputFile";

const Form = ({
  theme: { Color },
  FormArray,
  HandleSubmit,
  HandleChange,
  passClick,
  passwordShow,
  width,
  signature,
  filename,
  form,
}) => {
  return (
    <FormStyles Color={Color} width={width} signature={signature}>
      <form onSubmit={HandleSubmit}>
        {FormArray.map((item, key) => (
          <div key={key} className={item.classbody}>
            <label className={`${item.labelclassname}`}>{item.label}</label>
            {item.type === "submit" ? (
              <SubmitField
                type={item.type}
                value={item.value}
                classname={item.classname}
              />
            ) : item.type === "file" ? (
              <InputFile
                classdiv={"filebodycontent"}
                classcontent={"filecontent"}
                image={item.image}
                file_text={item.file_text}
                filename={filename}
                type={item.type}
                placeholder={item.placeholder}
                name={item.name}
                classname={item.classname}
                HandleChange={HandleChange}
              />
            ) : !item.type && item.description ? (
              <div>
                <Textarea
                  cols={item.cols}
                  rows={item.rows}
                  placeholder={item.placeholder}
                  name={item.name}
                  onChange={HandleChange}
                  classname={`${item.classname}`}
                />
              </div>
            ) : (
              <div>
                {!item.multiple_input ? (
                  <div>
                    <InputField
                      type={item.type}
                      placeholder={item.placeholder}
                      name={item.name}
                      onChange={HandleChange}
                      classname={`${item.classname}`}
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
                    form={form}
                    Arr={
                      item.multiple_input.length === 1
                        ? 2
                        : item.multiple_input.length
                    }
                    width={width}
                    signature={signature}
                  >
                    {item.multiple_input?.map((item, key) => (
                      <div key={key} className={"mulitple"}>
                        <div className={"mulitples"}>
                          <label className={`${item.labelclassname}`}>
                            {item.label}
                          </label>
                          {!item.type ? (
                            <div>
                              {item.description ? (
                                <Textarea
                                  cols={item.cols}
                                  rows={item.rows}
                                  placeholder={item.placeholder}
                                  name={item.name}
                                  onChange={HandleChange}
                                  classname={`${item.classname}`}
                                />
                              ) : (
                                <SelectField
                                  name={item.select_name}
                                  option={item.option}
                                  classname={item.classname}
                                />
                              )}
                            </div>
                          ) : (
                            <div>
                              <InputField
                                type={item.type}
                                placeholder={item.placeholder}
                                name={item.name}
                                onChange={HandleChange}
                                classname={`${item.classname}`}
                              />
                              {!passwordShow
                                ? item.iconShow && (
                                    <div
                                      className={item.classicon}
                                      onClick={passClick}
                                    >
                                      <item.iconShow
                                        className={item.classiconitem}
                                      />
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
                          )}
                        </div>
                      </div>
                    ))}
                  </MultipleInputDiv>
                )}
              </div>
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
