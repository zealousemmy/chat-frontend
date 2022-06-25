import { CreateChannelArray } from "../../util/Create-Channel";
import Form from "../Form";

const ChannelCreater = ({ HandleChange, HandleSubmit }) => {
  return (
    <div>
      <Form
        FormArray={CreateChannelArray}
        width={"65%"}
        form={"create channel"}
        HandleChange={HandleChange}
        HandleSubmit={HandleSubmit}
      />
    </div>
  );
};

export default ChannelCreater;
