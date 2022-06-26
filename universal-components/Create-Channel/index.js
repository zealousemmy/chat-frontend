import { CreateChannelArray } from "../../util/Create-Channel";
import Form from "../Form";

const ChannelCreater = ({ HandleChange, HandleSubmit, fileName }) => {
  return (
    <div>
      <Form
        FormArray={CreateChannelArray}
        width={"65%"}
        form={"create channel"}
        HandleChange={HandleChange}
        HandleSubmit={HandleSubmit}
        filename={fileName}
      />
    </div>
  );
};

export default ChannelCreater;
