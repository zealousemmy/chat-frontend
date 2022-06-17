import React from "react";
import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import { ChannelPostLeftArray } from "../../util/ChannelPost/Left";
import SubNav from "../../universal-components/SubNav";
import { ChannelPostArrayRight } from "../../util/ChannelPost/Right";
import FlexLeftBody from "../../universal-components/FlexLeft";
import PostPics from "../../asset/images/postpic.png";
import ChannelPostHeroSection from "../../universal-components/ChannelPostHeroSection";
import FlexCenterSubHeader from "../../universal-components/FlexCenter/SubHeader";
import { FlexCenterDashboard } from "../../util/Dashboard/FlexCenter";
import FlexCenterBody from "../../universal-components/FlexCenter/Body";
import { BsPencilSquare } from "react-icons/bs";

const ChannelPost = ({ theme: { Color } }) => {
  return (
    <BodyDiv Color={Color}>
      <Nav NavArrayContent={NavArrayDashboard} />
      <div className={"body"}>
        <div>
          <SubNav SubNavArray={ChannelPostLeftArray} />
        </div>
        <div className={"landingpageflexcenter channelpostcenter"}>
          <ChannelPostHeroSection
            PostPics={PostPics}
            title={"Finding Help"}
            description={
              "Poticial conversations and gists that will spark your interest"
            }
          />
          <div className={"edit-button"}>
            <h3>Edit Channel</h3>
            <BsPencilSquare />
          </div>
          <div>
            <FlexCenterSubHeader details={"All"} />
            <FlexCenterBody FlexBodyArray={FlexCenterDashboard} />
          </div>
        </div>
        <div>
          <FlexLeftBody FlexLeftArray={ChannelPostArrayRight} />
        </div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(ChannelPost);
