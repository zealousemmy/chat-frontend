import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import FlexLeftBody from "../../universal-components/FlexLeft";
import CreateChannelTab from "../../universal-components/CreateChannelTab";
import Cards from "../../universal-components/Cards";
import { CardsArray } from "../../util/New-User-Select-Channel/CardsArray";
import { ChannelsFlexArray } from "../../util/Channels/FlexLeft";
import ManagedChannels from "../../universal-components/Managed Channels";
import { ChannelsManagedArray } from "../../util/Channels/Body";
import { useState } from "react";
import Modals from "../../universal-components/Modals";
import PostField from "../Create-Post/PostField";
import ChannelCreater from "../../universal-components/Create-Channel";
import CreateChannels from "../Create-Post/Create-Channel";

const Channels = ({ theme: { Color } }) => {
  const [show, setShow] = useState(false);
  const HandleClick = () => {
    setShow(!show);
  };
  return (
    <BodyDiv Color={Color}>
      <Nav NavArrayContent={NavArrayDashboard} />
      <div className={"body"}>
        <div className={"flex-left"}>
          <FlexLeftBody FlexLeftArray={ChannelsFlexArray} />
        </div>
        <div className={"landingpageflexcenter"}>
          <div className={"channelHeader"}>
            <h2>Welcome to channels</h2>
          </div>
          <CreateChannelTab
            HandleClick={HandleClick}
            button_text={"Create a channel"}
            text={
              "Join channels to explore your interest. Note that you will be only able to post in a channel that you have joined"
            }
          />
          {show && (
            <Modals ModalComponent={CreateChannels} setValue={setShow} />
          )}
          <div className={"channel"}>
            <h2>Channels You Manage</h2>
            <ManagedChannels ManageChannelArray={ChannelsManagedArray} />
          </div>
          <div className={"channelbodyfooter"}>
            <h3>Top channels</h3>
            <Cards CardArray={CardsArray} />
          </div>
        </div>
        <div className={"rightbody flex-right"}></div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(Channels);
