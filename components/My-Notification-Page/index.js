import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import { NavArray } from "../../util/Landing-page/Nav";
import FlexRightBody from "../../universal-components/FlexRight";
import { NofitificationLeftArray } from "../../util/Notification/Flexleft";
import { withTheme } from "styled-components";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import NotificationBox from "../../universal-components/NotificationBox";
import { NotificationCenterArray } from "../../util/Notification/FlexCenter";
import FlexRightFooter from "../../universal-components/FlexRight/flexrightfooter";

const Notification = ({ theme: { Color } }) => {
  return (
    <BodyDiv Color={Color}>
      <Nav NavArrayContent={NavArrayDashboard} />
      <div className={"body"}>
        <div>
          <FlexRightBody FlexRightArray={NofitificationLeftArray} />
        </div>
        <div className={"landingpageflexcenter"}>
          <NotificationBox NotificationArray={NotificationCenterArray} />
        </div>
        <div>
          <div className={"notificationRight"}>
            <div>
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

export default withTheme(Notification);
