import React, { useCallback, useEffect, useState } from "react";
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
import FlexCenterBody from "../../universal-components/FlexCenter/Body";
import { BsPencilSquare } from "react-icons/bs";
import { useRouter } from "next/router";
import { useUser } from "../../util/store/userContext";

const ChannelPost = ({ theme: { Color }, loading, error }) => {
  const router = useRouter();
  const { channelPostId, sharedState } = useUser();
  const [showDropdown, setShowDropdown] = useState(false);

  const RemoveDropdown = useCallback(() => {
    if (showDropdown) {
      setShowDropdown(false);
    }
  }, [showDropdown]);

  const HandleShow = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  return (
    <BodyDiv Color={Color} onClick={RemoveDropdown}>
      <Nav
        NavArrayContent={NavArrayDashboard}
        sidebar={"sidebar"}
        myChannelPost={"myChannelPost"}
        show={showDropdown}
        HandleShow={HandleShow}
      />
      <div className={"body"}>
        <div className={"flex-left"}>
          <SubNav
            SubNavArray={ChannelPostLeftArray}
            channelPostId={channelPostId}
          />
        </div>
        <div className={"landingpageflexcenter"}>
          <ChannelPostHeroSection
            PostPics={PostPics}
            title={sharedState?.channelInfo?.data?.title || "Finding Help"}
            description={
              sharedState?.channelInfo?.data?.description ||
              "Poticial conversations and gists that will spark your interest"
            }
            postCount={sharedState?.channelInfo?.data?.post_count || 0}
            membersCount={
              sharedState?.channelInfo?.data?.user_channel_count || 0
            }
          />
          <div className={"channelpostcenter"}>
            <div className={"edit-button"}>
              <h3>Edit Channel</h3>
              <BsPencilSquare />
            </div>
          </div>
          <div>
            <FlexCenterSubHeader details={"All"} />
            <FlexCenterBody loading={loading} error={error} />
          </div>
        </div>
        <div className="flex-right">
          <FlexLeftBody FlexLeftArray={sharedState?.channelInfo} />
        </div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(ChannelPost);
