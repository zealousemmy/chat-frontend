import { useState } from "react";
import { withTheme } from "styled-components";
import { CreatePostStyles } from "./createpost";

const CreatePost = ({ theme: { Color }, title, Normalpost, Question }) => {
  const [postQuery, setPostQuery] = useState("Normal Post");
  const post_button = [{ title: "Normal Post" }, { title: "Ask a question" }];

  const HandleQuery = (title) => {
    setPostQuery(title);
  };

  return (
    <CreatePostStyles Color={Color} width={"100%"}>
      <div className={"create-post-body"}>
        <div className={"create-post-header"}>
          <h3>{title}</h3>
        </div>
        <div className={"create-post-tab"}>
          {post_button.map((item, key) => (
            <div key={key}>
              <button
                className={`${item.title === postQuery && "active"}`}
                onClick={() => HandleQuery(item.title)}
              >
                {item.title}
              </button>
            </div>
          ))}
        </div>
        <div>{postQuery === "Normal Post" ? <Normalpost /> : <Question />}</div>
      </div>
    </CreatePostStyles>
  );
};

export default withTheme(CreatePost);
