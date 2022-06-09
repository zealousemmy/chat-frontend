import Image from "next/image";
import { withTheme } from "styled-components";
import { PostStyles } from "./post.style";

const Post = ({ PostArray, theme: { Color }, filename }) => {
  return (
    <PostStyles Color={Color}>
      <form>
        {PostArray.map((item, key) => (
          <div key={key} className={`${item.classbody}`}>
            <label className={`${item.labelclassname}`}>{item.label}</label>
            {item.type === "submit" ? (
              <div>
                <input
                  type={item.type}
                  value={item.value}
                  className={`${item.classname}`}
                />
              </div>
            ) : item.type === "file" ? (
              <div className={"filebodycontent"}>
                <div className={"filecontent"}>
                  {item.image && (
                    <div>
                      <Image
                        src={item.image}
                        alt={item.file_text}
                        width={"24px"}
                        height={"24px"}
                      />
                    </div>
                  )}
                  <div>
                    <p>{!filename ? item.file_text : filename}</p>
                  </div>
                </div>
                <input
                  style={{ width: `${item.width}` }}
                  type={item.type}
                  placeholder={item.placeholder}
                  name={item.name}
                  //   onChange={HandleChange}
                  className={`${item.classname}`}
                />
              </div>
            ) : item.description ? (
              <div>
                <textarea
                  cols={item.cols}
                  rows={item.rows}
                  placeholder={item.placeholder}
                  name={item.name}
                  //   onChange={HandleChange}
                  className={`${item.classname}`}
                ></textarea>
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
