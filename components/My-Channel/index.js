import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import { ChannelPostArrayRight } from "../../util/ChannelPost/Right";
import FlexLeftBody from "../../universal-components/FlexLeft";
import ChannelPostHeroSection from "../../universal-components/ChannelPostHeroSection";
import FlexCenterSubHeader from "../../universal-components/FlexCenter/SubHeader";
import FlexCenterBody from "../../universal-components/FlexCenter/Body";
import { GrStatusGood } from "react-icons/gr";
const MyChannel = ({ theme: { Color },data,info }) => {
  return (
    <BodyDiv Color={Color}>
      <Nav NavArrayContent={NavArrayDashboard} />
      <div className={"body"}>
        <div></div>
        <div className={"landingpageflexcenter channelpostcenter"}>
          <ChannelPostHeroSection
            title={`${info?.data?.title}`}
            description={
             `${info?.data?.description}`
            }
          />
          <div className={"edit-button"}>
            <h3>Joined</h3>
            <GrStatusGood />
          </div>
          <div>
            <FlexCenterSubHeader details={"All"} />
            <FlexCenterBody FlexBodyArray={data} loading={data && false}/>
          </div>
        </div>
        <div>
          <FlexLeftBody FlexLeftArray={ChannelPostArrayRight} />
        </div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(MyChannel);
