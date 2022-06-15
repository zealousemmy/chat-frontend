import { AskAQuestionChannelArray } from "../../../util/PostChannel/AskQuestionChannel";
import Post from "../../Post";

const AskQuestionChannel = () => {
  return (
    <div>
      <Post PostArray={AskAQuestionChannelArray} />
    </div>
  );
};

export default AskQuestionChannel;
