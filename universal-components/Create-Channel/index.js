import { CreateChannelArray } from "../../util/Create-Channel";
import Form from "../Form";

const ChannelCreater = () => {
  return (
    <div>
      <Form
        FormArray={CreateChannelArray}
        width={"65%"}
        form={"create channel"}
      />
    </div>
  );
};

export default ChannelCreater;