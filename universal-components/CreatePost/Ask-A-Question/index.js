import { AskAQuestionArray } from "../../../util/CreatePost/Ask-A-Question";
import Post from "../../Post";

const AskAQuestion = () => {
  return (
    <div>
      <Post PostArray={AskAQuestionArray} />
    </div>
  );
};

export default AskAQuestion;
