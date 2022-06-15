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
  const [tabItem, setTabItem] = useState("Trending");

  const selectItem = ["All", "Few", "none"];

  const onclick = (title) => {
    if (title === "Recent") {
      setTab(FlexCenter);
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
      <Nav NavArrayContent={NavArray} page={"landing"} />
      <div className={"body"}>
        <div className={"flex-left"}>
          <FlexLeftBody FlexLeftArray={Flexleft} />
        </div>
        <div className={"landingpageflexcenter"}>
          <FlexCenterHeader onclick={onclick} tabItem={tabItem} />
          <FlexCenterSubHeader details={"All"} selectItem={selectItem} />
          <FlexCenterBody FlexBodyArray={tab} />
        </div>
        <div className="flex-right">
          <FlexRightBody FlexRightArray={FlexRightContent} />
          <FlexRightFooter />
        </div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(Landingpage);
