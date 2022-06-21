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
import FlexCenterBody from "../../universal-components/FlexCenter/Body";
import { FlexCenterDashboard } from "../../util/Dashboard/FlexCenter";
import NewPost from "../../universal-components/New-Post";
import { FlexCenter2 } from "../../util/Landing-page/FlexCenter/flexcenter2";
import { FlexCenter3 } from "../../util/Landing-page/FlexCenter/flexcenter3";
import { useState } from "react";
import SendMessage from "../../universal-components/Send-Message";

const DashboardComponent = ({ theme: { Color } }) => {
  const selectItem = ["All", "Few", "none"];

  const [tab, setTab] = useState(FlexCenterDashboard);
  const [tabItem, setTabItem] = useState("Recent");
  const onclick = (title) => {
    if (title === "Recent") {
      setTab(FlexCenterDashboard);
      setTabItem(title);
    } else if (title === "Trending") {
      setTab(FlexCenter2);
      setTabItem(title);
    } else if (title === "Most liked") {
      setTab(FlexCenter3);
      setTabItem(title);
    }
  };
  return (
    <BodyDiv Color={Color}>
      <Nav NavArrayContent={NavArrayDashboard} />
      <div className={"body"}>
        <div className={"flex-left"}>
          <FlexLeftBody FlexLeftArray={FlexleftProfile} />
        </div>
        <div className={"landingpageflexcenter"}>
          <div className={"channelHeader"}>
            <h2>Create your own post</h2>
            <NewPost />
          </div>
          <FlexCenterHeader onclick={onclick} tabItem={tabItem} />
          <FlexCenterSubHeader details={"All"} selectItem={selectItem} />
          <FlexCenterBody FlexBodyArray={tab} MessageBox={SendMessage} />
        </div>
        <div className="flex-right">
          <FlexRightBody FlexRightArray={FlexRightDashboard} />
          <FlexRightFooter />
        </div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(DashboardComponent);
