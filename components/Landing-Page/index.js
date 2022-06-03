import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import FlexCenterBody from "../../universal-components/FlexCenter/Body";
// import FlexCenterHeader from "../../universal-components/FlexCenter/Header";
// import FlexCenterSubHeader from "../../universal-components/FlexCenter/SubHeader";
import FlexLeftBody from "../../universal-components/FlexLeft";
import FlexRightBody from "../../universal-components/FlexRight";
import FlexRightFooter from "../../universal-components/FlexRight/flexrightfooter";
import Nav from "../../universal-components/Nav";
import { FlexCenter } from "../../util/Landing-page/FlexCenter";
import { Flexleft } from "../../util/Landing-page/FlexLeft";
import FlexRightContent from "../../util/Landing-page/FlexRight";
import { NavArray } from "../../util/Landing-page/Nav";

const Landingpage = ({ theme: { Color } }) => {
  return (
    <BodyDiv Color={Color}>
      <Nav NavArrayContent={NavArray} />
      <div className={"body"}>
        <div>
          <FlexLeftBody FlexLeftArray={Flexleft} />
        </div>
        <div className={"landingpageflexcenter"}>
          {/* <FlexCenterHeader />
          <FlexCenterSubHeader /> */}
          <FlexCenterBody FlexBodyArray={FlexCenter} />
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
