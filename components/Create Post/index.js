import { useState } from "react";
import { withTheme } from "styled-components";
import AskAQuestion from "../../universal-components/CreatePost/Ask-A-Question";
import NormalPost from "../../universal-components/CreatePost/Normal-Post";
import { CreatePostStyles } from "./createpost";

const CreatePost = ({ theme: { Color } }) => {
  const [postQuery, setPostQuery] = useState("Normal Post");
  const post_button = [{ title: "Normal Post" }, { title: "Ask a question" }];

  const HandleQuery = (title) => {
    setPostQuery(title);
  };
  return (
    <CreatePostStyles Color={Color}>
      <div>
        <div>
          <h3>Create a Post in channel</h3>
        </div>
        <div>
          {post_button.map((item, key) => (
            <div key={key}>
              <button onClick={() => HandleQuery(item.title)}>
                {item.title}
              </button>
            </div>
          ))}
        </div>
        <div>
          {postQuery === "Normal Post" ? <NormalPost /> : <AskAQuestion />}
        </div>
      </div>
    </CreatePostStyles>
  );
};

export default withTheme(CreatePost);
