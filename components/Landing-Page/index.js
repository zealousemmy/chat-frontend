import {useCallback, useEffect, useState} from "react";
import {withTheme} from "styled-components";
import {BodyDiv} from "../../universal-components/body";
import FlexCenterBody from "../../universal-components/FlexCenter/Body";
import FlexCenterHeader from "../../universal-components/FlexCenter/Header";
import FlexCenterSubHeader from "../../universal-components/FlexCenter/SubHeader";
import FlexLeftBody from "../../universal-components/FlexLeft";
import FlexRightBody from "../../universal-components/FlexRight";
import FlexRightFooter from "../../universal-components/FlexRight/flexrightfooter";
import Nav from "../../universal-components/Nav";
import {Flexleft} from "../../util/Landing-page/FlexLeft";
import FlexRightContent from "../../util/Landing-page/FlexRight";
import {NavArray} from "../../util/Landing-page/Nav";
import Axios from "axios"
import SubNav from "../../universal-components/SubNav";
import {MobileLandingPgArray} from "../../util/Landing-page/Mobile";


const LandingPage = ({theme: {Color}}) => {
    const selectItem = ["All", "Few", "none"];
    const [tab, setTab] = useState(null);
    const [tabItem, setTabItem] = useState("Trending");
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [iconShow, setIconShow] = useState(false)

    const onclick = useCallback((title) => {
        if (title === "Recent") {
            setTabItem(title);
            setLoading(true)
        } else if (title === "Trending") {
            setTabItem(title);
            setLoading(true)
        } else if (title === "Most liked") {
            setTabItem(title);
            setLoading(true)

        }
    }, []);
    const IconClick = useCallback(() => {
        setIconShow(!iconShow)
    }, [iconShow])

    const HandleQueries = useCallback(() => {
        if (tabItem.toLowerCase() === "recent") {
            Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/explore/recent-posts`).then((res) => {
                setTab(res.data)

                setLoading(false)
            }).catch((err) => {
                setLoading(false)
                setError(true)
            })

        } else if (tabItem.toLowerCase() === "trending") {
            Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/trending-posts`).then((res) => {
                setTab(res.data)
                console.log(tab, "tren")
                setLoading(false)
            }).catch((err) => {
                setLoading(false)
                setError(true)
            })
        } else if (tabItem.toLowerCase() === "most liked") {
            Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/explore/most-viewed-posts`).then((res) => {
                setTab(res.data)
                setLoading(false)
            }).catch((err) => {
                setLoading(false)
                setError(true)
            })
        }
    }, [tabItem])

    useEffect(() => {
        HandleQueries()
    }, [HandleQueries])

    useEffect(() => {
        Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/trending-posts`).then((res) => {
            setTab(res.data)
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
            setError(true)
        })
    }, [])
    return (
        <BodyDiv Color={Color}>
            <div style={{position: "relative"}}>
                <Nav
                    NavArrayContent={NavArray}
                    page={"landing"}
                    IconClick={IconClick}
                />
                {iconShow && (
                    <SubNav SubNavArray={MobileLandingPgArray} page={"landing"}/>
                )}
            </div>
            <div className={"body"}>
                <div className={"flex-left"}>
                    <FlexLeftBody FlexLeftArray={Flexleft}/>
                </div>
                <div className={"landingpageflexcenter"}>
                    <FlexCenterHeader onclick={onclick} tabItem={tabItem}/>
                    <FlexCenterSubHeader details={"All"} selectItem={selectItem}/>
                    <FlexCenterBody loading={loading} error={error} FlexBodyArray={tab}/>
                </div>
                <div className="flex-right">
                    <FlexRightBody FlexRightArray={FlexRightContent}/>
                    <FlexRightFooter/>
                </div>
            </div>
        </BodyDiv>
    );
};

export default withTheme(LandingPage);

