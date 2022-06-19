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
import {FlexCenter3} from "../../util/Landing-page/FlexCenter/flexcenter3";
import {Flexleft} from "../../util/Landing-page/FlexLeft";
import FlexRightContent from "../../util/Landing-page/FlexRight";
import {NavArray} from "../../util/Landing-page/Nav";
import {useRouter} from 'next/router';
import Axios from "axios"


const LandingPage = ({theme: {Color}}) => {
    const selectItem = ["All", "Few", "none"];
    const [tab, setTab] = useState(null);
    const [tabItem, setTabItem] = useState("Trending");
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)


    const onclick =useCallback((title) => {
        if (title === "Recent") {
            setTabItem(title);
            setLoading(true)
        } else if (title === "Trending") {
            setTabItem(title);
            setLoading(true)
        } else if (title === "Most liked") {
            setTab(FlexCenter3);
            setTabItem(title);
            setLoading(true)

        }
    },[]);


    const HandleQueries = useCallback(() => {
        if (tabItem.toLowerCase() === "recent") {
            Axios.get(`https://kuritr.herokuapp.com/api/explore/recent-posts`).then((res) => {
                setTab(res.data?.data)
                setLoading(false)
            }).catch((err)=>{
                setLoading(false)
                setError(true)
            })

        } else if (tabItem.toLowerCase() === "trending") {
            Axios.get(`https://kuritr.herokuapp.com/api/trending-posts`).then((res) => {
                setTab(res.data.data)
                setLoading(false)
            }).catch((err)=>{
                setLoading(false)
                setError(true)
            })
        }
    }, [tabItem])

    useEffect(() => {
        HandleQueries()
    }, [HandleQueries])

    useEffect(() => {
        Axios.get(`https://kuritr.herokuapp.com/api/trending-posts`).then((res) => {
            setTab(res.data?.data)
            setLoading(false)
        }).catch((err)=>{
            setLoading(false)
            setError(true)
        })
    }, [])
    return (
        <BodyDiv Color={Color}>
            <Nav NavArrayContent={NavArray} page={"landing"}/>
            <div className={"body"}>
                <div className={"flex-left"}>
                    <FlexLeftBody FlexLeftArray={Flexleft}/>
                </div>
                <div className={"landingpageflexcenter"}>
                    <FlexCenterHeader onclick={onclick} tabItem={tabItem}/>
                    <FlexCenterSubHeader details={"All"} selectItem={selectItem}/>
                    <FlexCenterBody FlexBodyArray={tab} loading={loading} error={error}/>
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

