import React,{useState} from "react";
import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import { ChannelPostLeftArray } from "../../util/ChannelPost/Left";
import SubNav from "../../universal-components/SubNav";
import { ChannelPostArrayRight } from "../../util/ChannelPost/Right";
import FlexLeftBody from "../../universal-components/FlexLeft";
import Members from "../Users";
// import { UserDetailsConfig } from "../../universal-components/UserCard/Config";
import { useCallback, useEffect } from "react";
import { useUser } from "../../util/store/userContext";
import Axios from "axios";

const Member = ({ theme: { Color } }) => {
const {sharedState} = useUser()
const [channelMembers,setChannelMembers] = useState([])

  const GetChannelMembers = useCallback(()=>{
    Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel/channel-subscribed-by-users/${sharedState?.channelPostId}`).then((res)=>{
      setChannelMembers(res?.data?.data)
    }).catch((err)=>console.log(err))
  },[sharedState?.channelPostId])

  useEffect(()=>{
    sharedState?.channelPostId && GetChannelMembers()
  },[sharedState?.channelPostId])
  return (
    <BodyDiv Color={Color}>
      <Nav NavArrayContent={NavArrayDashboard} sidebar={"sidebar"} />
      <div className={"body"}>
        <div className={"flex-left"}>
          <SubNav SubNavArray={ChannelPostLeftArray} />
        </div>
        <div className={"landingpageflexcenter channelpostcenter"}>
          <Members title={"All members"} userArray={channelMembers} />
        </div>
        <div className="flex-right">
          <FlexLeftBody FlexLeftArray={ChannelPostArrayRight} />
        </div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(Member);
