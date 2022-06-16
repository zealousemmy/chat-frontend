import CreatePost from ".";
import AskQuestionChannel from "../../universal-components/PostChannel/AskQuestionChannel";
import NormalPostChannel from "../../universal-components/PostChannel/NormalPostChannel";

const ChannelField = () => {
  return (
    <div style={{ width: "64%" }}>
      <CreatePost
        title={"Create a Post"}
        Normalpost={NormalPostChannel}
        Question={AskQuestionChannel}
      />
    </div>
  );
};

export default ChannelField;
