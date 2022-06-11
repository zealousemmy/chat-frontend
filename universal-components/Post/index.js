import Image from "next/image";
import { withTheme } from "styled-components";
import { PostStyles } from "./post.style";
import Textarea from "../../Mono-Component/Input/TextArea";
import SelectField from "../../Mono-Component/Input/SelectField";
import SubmitField from "../../Mono-Component/Input/SubmitField";
import InputFile from "../../Mono-Component/Input/InputFile";

const Post = ({ PostArray, theme: { Color }, filename, HandleChange }) => {
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
                image={item.image}
                file_text={item.file_text}
                filename={filename}
                type={item.type}
                placeholder={item.placeholder}
                name={item.name}
                classname={item.classname}
                HandleChange={HandleChange}
              />
            ) : item.description && !item.type ? (
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
                    classname={item.classname}
                  />
                )}
              </div>
            ) : (
              <input
                style={{ width: `${item.width}` }}
                type={item.type}
                placeholder={item.placeholder}
                name={item.name}
                //   onChange={HandleChange}
                className={`${item.classname}`}
              />
            )}
          </div>
        ))}
      </form>
    </PostStyles>
  );
};

export default withTheme(Post);
