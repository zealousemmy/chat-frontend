import { NormalPostchannelArray } from "../../../util/PostChannel/NormalPostChannel";
import Post from "../../Post";

const NormalPostChannel = (channels) => {
  return (
    <div>
      <Post PostArray={channels} />
    </div>
  );
};

export default NormalPostChannel;
