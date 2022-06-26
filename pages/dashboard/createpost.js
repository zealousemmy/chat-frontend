import CreateChannels from "../../components/Create-Post/Create-Channel";
import createpost from "./mychannel/createpost";

const Createpost = () => {
  return (
    <div>
      <CreateChannels />
    </div>
  );
};
createpost.auth = true
export default Createpost;
