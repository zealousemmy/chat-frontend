import { NormalPostArray } from "../../../util/CreatePost/Normal-Post";
import Post from "../../Post";

const NormalPost = () => {
  return (
    <div>
      <Post PostArray={NormalPostArray} />
    </div>
  );
};

export default NormalPost;
