import CreatePost from ".";
import AskQuestionChannel from "../../universal-components/PostChannel/AskQuestionChannel";
import NormalPostChannel from "../../universal-components/PostChannel/NormalPostChannel";
import { DivStyles } from "./div.styles";

const ChannelField = () => {
  return (
    <DivStyles width={"64%"}>
      <CreatePost
        title={"Create a Post"}
        Normalpost={NormalPostChannel}
        Question={AskQuestionChannel}
      />
    </DivStyles>
  );
};

export default ChannelField;
