import { useState } from "react";
import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import FlexCenterBody from "../../universal-components/FlexCenter/Body";
import FlexCenterHeader from "../../universal-components/FlexCenter/Header";
import FlexCenterSubHeader from "../../universal-components/FlexCenter/SubHeader";
import FlexLeftBody from "../../universal-components/FlexLeft";
import FlexRightBody from "../../universal-components/FlexRight";
import FlexRightFooter from "../../universal-components/FlexRight/flexrightfooter";
import Nav from "../../universal-components/Nav";
import { FlexCenter } from "../../util/Landing-page/FlexCenter";
import { FlexCenter2 } from "../../util/Landing-page/FlexCenter/flexcenter2";
import { FlexCenter3 } from "../../util/Landing-page/FlexCenter/flexcenter3";
import { Flexleft } from "../../util/Landing-page/FlexLeft";
import FlexRightContent from "../../util/Landing-page/FlexRight";
import { NavArray } from "../../util/Landing-page/Nav";

const Landingpage = ({ theme: { Color } }) => {
  const [tab, setTab] = useState(FlexCenter);
  const [tabItem, setTabItem] = useState("Resent");
  const onclick = (title) => {
    if (title === "Resent") {
      setTab(FlexCenter);
      setTabItem(title);
    } else if (title === "Trending") {
      setTab(FlexCenter2);
      setTabItem(title);
    } else if (title === "Most Viewed") {
      setTab(FlexCenter3);
      setTabItem(title);
    }
  };
  return (
    <BodyDiv Color={Color}>
      <Nav NavArrayContent={NavArray} />
      <div className={"body"}>
        <div>
          <FlexLeftBody FlexLeftArray={Flexleft} />
        </div>
        <div className={"landingpageflexcenter"}>
          <FlexCenterHeader onclick={onclick} tabItem={tabItem} />
          <FlexCenterSubHeader details={"All"} />
          <FlexCenterBody FlexBodyArray={tab} />
        </div>
        <div>
          <FlexRightBody FlexRightArray={FlexRightContent} />
          <FlexRightFooter />
        </div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(Landingpage);
