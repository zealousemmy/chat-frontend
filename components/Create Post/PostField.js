import AskAQuestion from "../../universal-components/CreatePost/Ask-A-Question";
import NormalPost from "../../universal-components/CreatePost/Normal-Post";
import CreatePost from ".";

const PostField = () => {
  return (
    <div style={{ width: "100%" }}>
      <CreatePost
        Normalpost={NormalPost}
        title={"Create a Post in channel"}
        Question={AskAQuestion}
      />
    </div>
  );
};

export default PostField;
