import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import FlexLeftBody from "../../universal-components/FlexLeft";
import FlexCenterBody from "../../universal-components/FlexCenter/Body";
import SendMessage from "../../universal-components/Send-Message";
import { withTheme } from "styled-components";
import { SinglePostCenter } from "../../util/SinglePostPage/FlexLeft";
import { FlexCenterSinglePost } from "../../util/SinglePostPage/FlexCenter";
import FlexRightFooter from "../../universal-components/FlexRight/flexrightfooter";

const SigleFullPostSize = ({ theme: { Color } }) => {
  return (
    <BodyDiv Color={Color}>
      <Nav NavArrayContent={NavArrayDashboard} />
      <div className={"body"}>
        <div className={"flex-left"}>
          <FlexLeftBody FlexLeftArray={SinglePostCenter} />
        </div>
        <div className={"landingpageflexcenter"}>
          <FlexCenterBody
            FlexBodyArray={FlexCenterSinglePost}
            ProfileCommentBox={SendMessage}
            singlepage={"singlepage"}
          />
        </div>
        <div className="flex-right">
          <div className={"notificationRight"}>
            <div className={"notificationRightHeader"}>
              <h3>Advert goes here</h3>
            </div>
            <div className={"notification-body"}></div>
          </div>
          <FlexRightFooter />
        </div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(SigleFullPostSize);
