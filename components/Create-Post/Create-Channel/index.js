import { withTheme } from "styled-components";
import ChannelCreater from "../../../universal-components/Create-Channel";
import { CreatePostStyles } from "../createpost";

const CreateChannels = ({
  theme: { Color },
  HandleChange,
  HandleSubmit,
  fileName,
}) => {
  return (
    <CreatePostStyles Color={Color} width={"60%"}>
      <div className={"create-post-body"}>
        <div className={"create-post-header"}>
          <h3>Create a Post in channel</h3>
        </div>
        <div>
          <ChannelCreater
            HandleChange={HandleChange}
            HandleSubmit={HandleSubmit}
            fileName={fileName}
          />
        </div>
      </div>
    </CreatePostStyles>
  );
};

export default withTheme(CreateChannels);
