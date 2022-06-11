import { withTheme } from "styled-components";
import ChannelCreater from "../../../universal-components/Create Channel";
import { CreatePostStyles } from "../createpost";

const CreateChannels = ({ theme: { Color } }) => {
  return (
    <CreatePostStyles Color={Color}>
      <div className={"create-post-body"}>
        <div className={"create-post-header"}>
          <h3>Create a Post in channel</h3>
        </div>
        <div>
          <ChannelCreater />
        </div>
      </div>
    </CreatePostStyles>
  );
};

export default withTheme(CreateChannels);
