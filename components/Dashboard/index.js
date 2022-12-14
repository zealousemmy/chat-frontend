import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import FlexLeftBody from "../../universal-components/FlexLeft";
import { withTheme } from "styled-components";
import FlexRightFooter from "../../universal-components/FlexRight/flexrightfooter";
import FlexRightBody from "../../universal-components/FlexRight";
import FlexCenterHeader from "../../universal-components/FlexCenter/Header";
import FlexCenterSubHeader from "../../universal-components/FlexCenter/SubHeader";
import FlexCenterBody from "../../universal-components/FlexCenter/Body";
import NewPost from "../../universal-components/New-Post";
import { useCallback, useEffect, useMemo, useState } from "react";
import SendMessage from "../../universal-components/Send-Message";
import Axios from "axios";
import { useUser } from "../../util/store/userContext";
import { DecryptData } from "../../util/dataSecurity";

const DashboardComponent = ({
  theme: { Color },
  channelsTrend,
  channels,
  error: ServerError,
  userId,
}) => {
  const { user } = useUser();
  const [trendingChannels] = useState([
    {
      title: "Trending Channels",
      subtitle: "Join any channel you like here",
      classbody: "firstflexleftbody",
      classnamefirst: "firstflexleftclass",
      classitemfirst: "firstflexleftitem",
      classnamesecond: "firstflexleftclasssecond",
      classtext: "footeritem",
      text: "see more",
      channelsTrend: channelsTrend?.data,
    },
  ]);

  const [tab, setTab] = useState(null);

  const [channelSelected, setChannelSelected] = useState(1);

  const [tabItem, setTabItem] = useState("Feeds");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const [showPerson, setShowPerson] = useState(false);

  const [showSelectChannel, setShowSelectChannel] = useState(false);

  const [showSubHeader, setShowSubHeader] = useState(false);

  const RemoveDropdown = useCallback(() => {
    if (showPerson) {
      setShowPerson(false);
    }

    if (showSelectChannel) {
      setShowSelectChannel(false);
    }

    if (showSubHeader) {
      setShowSubHeader(false);
    }
  }, [showPerson, showSelectChannel, showSubHeader]);

  const HandleShowPerson = () => {
    setShowPerson(!showPerson);
  };

  const HandleSelectChannel = () => {
    setShowSelectChannel(!showSelectChannel);
  };

  const HandleSubHeader = () => {
    setShowSubHeader(!showSubHeader);
  };

  const onclick = useCallback((title) => {
    if (title === "Recent") {
      setTabItem(title);
      setLoading(true);
    } else if (title === "Feeds") {
      setTabItem(title);
      setLoading(true);
    } else if (title === "Most liked") {
      setTabItem(title);
      setLoading(true);
    }
  }, []);

  const HandleQueries = useCallback(() => {
    if (tabItem.toLowerCase() === "recent") {
      Axios.get(
        `${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel-latest-posts/${channelSelected}`
      )
        .then((res) => {
          setTab(res.data);

          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
        });
    } else if (tabItem.toLowerCase() === "feeds") {
      let __user = DecryptData("xur");

      // Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel-trending-posts/${channelSelected}`).then((res) => {
      // Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/dashboard/17`).then((res) => {
      Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/dashboard/${__user?.id}`)
        .then((res) => {
          setTab(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
        });
    } else if (tabItem.toLowerCase() === "most liked") {
      Axios.get(
        `${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel-most-liked-posts/${channelSelected}`
      )
        .then((res) => {
          setTab(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
        });
    }
  }, [channelSelected, tabItem]);
  const updateChannelSelected = (id) => {
    setChannelSelected(id);
  };

  // const getInitialPageData = (id) => {
  //     try {
  //         console.log(id, "first")
  //
  //         // Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel-trending-posts/1`).then((res) => {
  //         Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/dashboard/${id}`).then((res) => {
  //             setTab(res.data)
  //             setLoading(false)
  //         }).catch((err) => {
  //             setLoading(false)
  //             setError(true)
  //         })
  //
  //     } catch (e) {
  //         setError(true)
  //     }
  // }

  useMemo(() => updateChannelSelected, []);

  useEffect(() => {
    return HandleQueries();
  }, [channelSelected, HandleQueries]);

  useEffect(() => {
    (async () => {
      let __user = await DecryptData("xur");
      // getInitialPageData(__user.id)

      try {
        // Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel-trending-posts/1`).then((res) => {
        let data = await Axios.get(
          `${process.env.NEXT_PUBLIC_APP_DOMAIN}/dashboard/${__user.id}`
        );
        setTab(data.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  return (
    <>
      {ServerError ? (
        <p>{ServerError}</p>
      ) : (
        <BodyDiv Color={Color} onClick={RemoveDropdown}>
          <Nav
            NavArrayContent={NavArrayDashboard}
            show={showPerson}
            HandleShow={HandleShowPerson}
          />
          <div className={"body"}>
            <div className={"flex-left"}>
              <FlexLeftBody FlexLeftArray={user} />
            </div>
            <div className={"landingpageflexcenter"}>
              <div className={"channelHeader"}>
                <h2>Create your own post</h2>
                <NewPost
                  channels={channels}
                  HandleSelectChannel={HandleSelectChannel}
                  showSelectChannel={showSelectChannel}
                />
              </div>
              <FlexCenterHeader onclick={onclick} tabItem={tabItem} />
              <FlexCenterSubHeader
                details={channelsTrend?.data}
                SetChannelSelected={updateChannelSelected}
                show={showSubHeader}
                HandleShow={HandleSubHeader}
              />
              <FlexCenterBody
                FlexBodyArray={tab}
                loading={loading}
                error={error}
                MessageBox={SendMessage}
              />
            </div>
            <div className="flex-right">
              {/*<FlexRightBody FlexRightArray={FlexRightDashboard} />*/}
              <FlexRightBody FlexRightArray={trendingChannels} />
              <FlexRightFooter />
            </div>
          </div>
        </BodyDiv>
      )}{" "}
    </>
  );
};

export default withTheme(DashboardComponent);
