import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import FlexLeftBody from "../../universal-components/FlexLeft";
import FlexRightBody from "../../universal-components/FlexRight";
import FlexRightFooter from "../../universal-components/FlexRight/flexrightfooter";
import { Flexleft } from "../../util/Landing-page/FlexLeft";
import FlexRightContent from "../../util/Landing-page/FlexRight";
import { NavArray } from "../../util/Landing-page/Nav";
import FlexCenterBody from "../../universal-components/FlexCenter/Body";
import SendMessage from "../../universal-components/Send-Message";
import { FlexCenterSinglePost } from "../../util/SinglePostPage/FlexCenter";

const NoUserSinglePost = ({ theme: { Color } }) => {
  return (
    <BodyDiv Color={Color}>
      <Nav NavArrayContent={NavArray} page={"landing"} IconClick={IconClick} />
      <div className={"body"}>
        <div className={"flex-left"}>
          <FlexLeftBody FlexLeftArray={Flexleft} />
        </div>
        <div className={"landingpageflexcenter"}>
          <FlexCenterBody
            FlexBodyArray={FlexCenterSinglePost}
            ProfileCommentBox={SendMessage}
            singlepage={"singlepage"}
          />
        </div>
        <div className="flex-right">
          <FlexRightBody FlexRightArray={FlexRightContent} />
          <FlexRightFooter />
        </div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(NoUserSinglePost);
