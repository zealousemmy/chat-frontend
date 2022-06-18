import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import { ChannelPostLeftArray } from "../../util/ChannelPost/Left";
import SubNav from "../../universal-components/SubNav";
import { ChannelPostArrayRight } from "../../util/ChannelPost/Right";
import FlexLeftBody from "../../universal-components/FlexLeft";
import PostApproval from "../PostApproval";

const AwaitApproval = ({ theme: { Color } }) => {
  return (
    <BodyDiv Color={Color}>
      <Nav NavArrayContent={NavArrayDashboard} sidebar={"sidebar"} />
      <div className={"body"}>
        <div className={"flex-left"}>
          <SubNav SubNavArray={ChannelPostLeftArray} />
        </div>
        <div className={"landingpageflexcenter channelpostcenter"}>
          <PostApproval />
        </div>
        <div className="flex-right">
          <FlexLeftBody FlexLeftArray={ChannelPostArrayRight} />
        </div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(AwaitApproval);
