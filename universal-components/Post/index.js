import Image from "next/image";
import { withTheme } from "styled-components";
import { PostStyles } from "./post.style";

const Post = ({ PostArray, theme: { Color }, filename }) => {
  return (
    <PostStyles Color={Color}>
      <form>
        {PostArray.map((item, key) => (
          <div key={key}>
            <label className={`${item.labelclassname}`}>{item.label}</label>
            {item.type !== "submit" ? (
              item.type !== "file" ? (
                <div>
                  <input
                    style={{ width: `${item.width}` }}
                    type={item.type}
                    placeholder={item.placeholder}
                    name={item.name}
                    //   onChange={HandleChange}
                    className={`${item.classname}`}
                  />
                </div>
              ) : (
                <div>
                  <div>
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
                      <h4>{!filename ? item.file_text : filename}</h4>
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
              )
            ) : (
              <div>
                <input
                  type={item.type}
                  value={item.value}
                  className={`${item.classname}`}
                />
              </div>
            )}
            <div>
              {item.description && (
                <textarea
                  cols={item.cols}
                  rows={item.rows}
                  placeholder={item.placeholder}
                  name={item.name}
                  //   onChange={HandleChange}
                  className={`${item.classname}`}
                ></textarea>
              )}
            </div>
          </div>
        ))}
      </form>
    </PostStyles>
  );
};

export default withTheme(Post);
