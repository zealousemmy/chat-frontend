import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import { ChannelPostLeftArray } from "../../util/ChannelPost/Left";
import SubNav from "../../universal-components/SubNav";
import { ChannelPostArrayRight } from "../../util/ChannelPost/Right";
import FlexLeftBody from "../../universal-components/FlexLeft";
import Members from "../Members";
import { UserDetailsConfig } from "../../universal-components/UserCard/Config";
import { withTheme } from "styled-components";

const Admin = ({ theme: { Color } }) => {
  return (
    <BodyDiv Color={Color}>
      <Nav NavArrayContent={NavArrayDashboard} />
      <div className={"body"}>
        <div>
          <SubNav SubNavArray={ChannelPostLeftArray} />
        </div>
        <div className={"landingpageflexcenter channelpostcenter"}>
          <Members title={"All Admins"} userArray={UserDetailsConfig} />
        </div>
        <div>
          <FlexLeftBody FlexLeftArray={ChannelPostArrayRight} />
        </div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(Admin);
