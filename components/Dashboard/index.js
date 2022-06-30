import {BodyDiv} from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import FlexLeftBody from "../../universal-components/FlexLeft";
import {FlexleftProfile} from "../../util/Dashboard/FlexLeft";
import {withTheme} from "styled-components";
import FlexRightFooter from "../../universal-components/FlexRight/flexrightfooter";
import FlexRightBody from "../../universal-components/FlexRight";
import FlexCenterHeader from "../../universal-components/FlexCenter/Header";
import FlexCenterSubHeader from "../../universal-components/FlexCenter/SubHeader";
import FlexCenterBody from "../../universal-components/FlexCenter/Body";
import NewPost from "../../universal-components/New-Post";
import {useCallback, useEffect, useMemo, useState} from "react";
import SendMessage from "../../universal-components/Send-Message";
import Axios from "axios";
import {useUser} from "../../util/store/userContext";
import {DecryptData} from "../../util/dataSecurity";

const DashboardComponent = ({theme: {Color}, channelsTrend, channels, error:ServerError}) => {

    const {user} = useUser()
    const [trendingChannels] = useState([{
        title: "Trending Channels",
        subtitle: "Join any channel you like here",
        classbody: "firstflexleftbody",
        classnamefirst: "firstflexleftclass",
        classitemfirst: "firstflexleftitem",
        classnamesecond: "firstflexleftclasssecond",
        classtext: "footeritem",
        text: "see more", channelsTrend: channelsTrend?.data
    }])

    const [tab, setTab] = useState(null);

    const [channelSelected, setChannelSelected] = useState(1);

    const [tabItem, setTabItem] = useState("Feeds");

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(false)

    const onclick = useCallback((title) => {
        if (title === "Recent") {
            setTabItem(title);
            setLoading(true)
        } else if (title === "Feeds") {
            setTabItem(title);
            setLoading(true)
        } else if (title === "Most liked") {
            setTabItem(title);
            setLoading(true)
        }
    }, []);

    const HandleQueries = useCallback(() => {
        if (tabItem.toLowerCase() === "recent") {
            Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel-latest-posts/${channelSelected}`).then((res) => {
                setTab(res.data)

                setLoading(false)
            }).catch((err) => {
                setLoading(false)
                setError(true)
            })

        } else if (tabItem.toLowerCase() === "feeds") {
            // Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel-trending-posts/${channelSelected}`).then((res) => {
            Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/dashboard/${user?.id}`).then((res) => {
                setTab(res.data)
                setLoading(false)
            }).catch((err) => {
                setLoading(false)
                setError(true)
            })
        } else if (tabItem.toLowerCase() === "most liked") {
            Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel-most-liked-posts/${channelSelected}`).then((res) => {
                setTab(res.data)
                setLoading(false)
            }).catch((err) => {
                setLoading(false)
                setError(true)
            })
        }
    }, [channelSelected, tabItem])
    const updateChannelSelected = (id) => {
        setChannelSelected(id)
    }

    const getInitialPageData =()=>{
        try {
      // Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel-trending-posts/1`).then((res) => {
      Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/dashboard/${user.id}`).then((res) => {
        setTab(res.data)
        setLoading(false)
      }).catch((err) => {
        setLoading(false)
        setError(true)
      })

        }catch (e) {
            setError(true)
        }
    }

    useMemo(() => updateChannelSelected, [])

    useEffect(() => {
      return   HandleQueries()
    }, [channelSelected, HandleQueries])

    useEffect(() => {
        // let __user = DecryptData("xur")
        console.log(user,"dddddhhhhhh")
        if(user !== null){
            console.log(user,"hhhhhh")
            return  getInitialPageData()
        }
    }, [user])

    return (
        <>
        {
            ServerError ? <p>{ServerError}</p> : <BodyDiv Color={Color}>
                <Nav NavArrayContent={NavArrayDashboard}/>
                <div className={"body"}>
                    <div className={"flex-left"}>
                        <FlexLeftBody FlexLeftArray={user}/>
                    </div>
                    <div className={"landingpageflexcenter"}>
                        <div className={"channelHeader"}>
                            <h2>Create your own post</h2>
                            <NewPost channels={channels}/>
                        </div>
                        <FlexCenterHeader onclick={onclick} tabItem={tabItem}/>
                        <FlexCenterSubHeader details={channelsTrend?.data} SetChannelSelected={updateChannelSelected}/>
                        <FlexCenterBody FlexBodyArray={tab} loading={loading} error={error} MessageBox={SendMessage}/>
                    </div>
                    <div className="flex-right">
                        {/*<FlexRightBody FlexRightArray={FlexRightDashboard} />*/}
                        <FlexRightBody FlexRightArray={trendingChannels}/>
                        <FlexRightFooter/>
                    </div>
                </div>
            </BodyDiv>
        } </>);
};

export default withTheme(DashboardComponent);
