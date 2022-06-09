import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import { MyPostsFlexleft } from "../../util/MyPosts/FlexLeft";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import FlexLeftBody from "../../universal-components/FlexLeft";
import { withTheme } from "styled-components";
import CreateChannelTab from "../../universal-components/CreateChannelTab";
import FlexCenterBody from "../../universal-components/FlexCenter/Body";
import { FlexCenter2 } from "../../util/Landing-page/FlexCenter/flexcenter2";
import FlexRightFooter from "../../universal-components/FlexRight/flexrightfooter";
import FlexRightBody from "../../universal-components/FlexRight";
import MyPostFlexRight from "../../util/MyPosts/FlexRight";

const MyPost = ({ theme: { Color } }) => {
  return (
    <BodyDiv Color={Color}>
      <Nav NavArrayContent={NavArrayDashboard} />
      <div className={"body"}>
        <div>
          <FlexLeftBody FlexLeftArray={MyPostsFlexleft} />
        </div>
        <div className={"landingpageflexcenter"}>
          <CreateChannelTab
            button_text={"Create a Post"}
            text={"You have created 22 posts across 14 channels"}
          />
          <div>
            <h3>My Post(22)</h3>
          </div>
          <FlexCenterBody FlexBodyArray={FlexCenter2} />
        </div>
        <div>
          <FlexRightBody FlexRightArray={MyPostFlexRight} />
          <FlexRightFooter />
        </div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(MyPost);
