import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import FlexLeftBody from "../../universal-components/FlexLeft";
import { FlexleftProfile } from "../../util/Dashboard/FlexLeft";
import { withTheme } from "styled-components";
import FlexRightDashboard from "../../util/Dashboard/FlexRight";
import FlexRightFooter from "../../universal-components/FlexRight/flexrightfooter";
import FlexRightBody from "../../universal-components/FlexRight";
import FlexCenterHeader from "../../universal-components/FlexCenter/Header";
import FlexCenterSubHeader from "../../universal-components/FlexCenter/SubHeader";

const DashboardComponent = ({ theme: { Color } }) => {
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
          </div>
          <FlexCenterHeader />
          <FlexCenterSubHeader />
          {/* <div className={"channelbodyfooter"}>
            <h3>Suggested channels</h3>
            <p>Pick three channels </p>
            <Cards CardArray={CardsArray} />
          </div> */}
        </div>
        <div>
          <FlexRightBody FlexRightArray={FlexRightDashboard} />
          <FlexRightFooter />
        </div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(DashboardComponent);
