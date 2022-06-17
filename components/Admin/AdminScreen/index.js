import { BodyDiv } from "../../../universal-components/body";
import Overview from "../Overview";
import Nav from "../../../universal-components/Nav";
import { withTheme } from "styled-components";
import NavArrayDashboard from "../../../util/New-User-Select-Channel/Nav";
import { ChannelPostLeftArray } from "../../../util/ChannelPost/Left";
import SubNav from "../../../universal-components/SubNav";
import PosterCommunity from "../../../Mono-Component/posters/Community";
import { AdminLeftArray } from "../../../util/Admins/Left";

const AdminsMainScreen = ({ theme: { Color } }) => {
  return (
    <BodyDiv Color={Color}>
      <Nav NavArrayContent={NavArrayDashboard} />
      <div className={"body"}>
        <div className="admin-sidenav">
          <SubNav SubNavArray={AdminLeftArray} nav={"sub-nav"} />
        </div>
        <div className={"admin-component-display "}>
          <Overview />
        </div>
        <div></div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(AdminsMainScreen);
