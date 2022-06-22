import {withTheme} from "styled-components";
import {BodyDiv} from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import FlexLeftBody from "../../universal-components/FlexLeft";
import CreateChannelTab from "../../universal-components/CreateChannelTab";
import Cards from "../../universal-components/Cards";
import {CardsArray} from "../../util/New-User-Select-Channel/CardsArray";
import {ChannelsFlexArray} from "../../util/Channels/FlexLeft";
import ManagedChannels from "../../universal-components/Managed Channels";
import {ChannelsManagedArray} from "../../util/Channels/Body";
import {useEffect, useState} from "react";
import Modals from "../../universal-components/Modals";
import CreateChannels from "../Create-Post/Create-Channel";
import Axios from "axios"

const Channels = ({theme: {Color}}) => {
    const [show, setShow] = useState(false);
    const [channelListData, setchannelListData] = useState([])
    const [managedChannels, setManagedChannel] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const HandleClick = () => {
        setShow(!show);
    };
    const getInitialPageData = async ()=>{
        try{
            const [channelsRes, managedChannelsRes] = await Promise.all([
                fetch(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel/get`),
                fetch(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel/channels-i-can-post-to/2`)
            ]);
            const [channels, managedChannels] = await Promise.all([
                channelsRes.json(),
                managedChannelsRes.json()
            ]);
        setLoading(false)
        setchannelListData(channels.data);
        setManagedChannel(managedChannels.data)
        }catch (e) {
            setError(true)
        }
}

    useEffect(() => {
       getInitialPageData().then()

    }, [])
    return (
        <BodyDiv Color={Color}>
            <Nav NavArrayContent={NavArrayDashboard}/>
            <div className={"body"}>
                <div className={"flex-left"}>
                    <FlexLeftBody FlexLeftArray={ChannelsFlexArray}/>
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
                        <Modals ModalComponent={CreateChannels} setValue={setShow}/>
                    )}
                    <div className={"channel"}>
                        <h2>Channels You Manage</h2>
                        <ManagedChannels ManageChannelArray={managedChannels}/>
                    </div>
                    <div className={"channelbodyfooter"}>
                        <h3>Top channels</h3>
                        <Cards loading={loading} error={error} CardArray={channelListData}/>
                    </div>
                </div>
                <div className={"rightbody flex-right"}/>
            </div>
        </BodyDiv>
    );
};

export default withTheme(Channels);
