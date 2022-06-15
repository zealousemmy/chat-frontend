import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import FlexLeftBody from "../../universal-components/FlexLeft";
import { FlexleftProfile } from "../../util/Dashboard/FlexLeft";
import { withTheme } from "styled-components";
import FlexRightDashboard from "../../util/Dashboard/FlexRight";
import FlexRightFooter from "../../universal-components/FlexRight/flexrightfooter";
import FlexRightBody from "../../universal-components/FlexRight";
import FlexCenterBody from "../../universal-components/FlexCenter/Body";
import { FlexCenterDashboard } from "../../util/Dashboard/FlexCenter";
import NewPost from "../../universal-components/New Post";
import SendMessage from "../../universal-components/Send Message";

const PostFullNomalSize = ({ theme: { Color } }) => {
  const selectItem = ["most relevant", "less relevant", "not relevant"];
  return (
    <BodyDiv Color={Color}>
      <Nav NavArrayContent={NavArrayDashboard} />
      <div className={"body"}>
        <div>
          <FlexLeftBody FlexLeftArray={FlexleftProfile} />
        </div>
        <div className={"landingpageflexcenter"}>
          <div className={"channelHeader"}>
            <h2>Create your own post</h2>
            <NewPost />
          </div>
          <FlexCenterBody
            FlexBodyArray={FlexCenterDashboard}
            MessageBox={SendMessage}
            selectItem={selectItem}
          />
        </div>
        <div>
          <FlexRightBody FlexRightArray={FlexRightDashboard} />
          <FlexRightFooter />
        </div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(PostFullNomalSize);
