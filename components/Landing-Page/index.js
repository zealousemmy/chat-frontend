import { useState, useEffect } from "react";
import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import FlexCenterBody from "../../universal-components/FlexCenter/Body";
import FlexCenterHeader from "../../universal-components/FlexCenter/Header";
import FlexCenterSubHeader from "../../universal-components/FlexCenter/SubHeader";
import FlexLeftBody from "../../universal-components/FlexLeft";
import FlexRightBody from "../../universal-components/FlexRight";
import FlexRightFooter from "../../universal-components/FlexRight/flexrightfooter";
import Nav from "../../universal-components/Nav";
import { FlexCenter } from "../../util/Landing-page/FlexCenter";
import { FlexCenter2 } from "../../util/Landing-page/FlexCenter/flexcenter2";
import { FlexCenter3 } from "../../util/Landing-page/FlexCenter/flexcenter3";
import { Flexleft } from "../../util/Landing-page/FlexLeft";
import FlexRightContent from "../../util/Landing-page/FlexRight";
import { NavArray } from "../../util/Landing-page/Nav";
import { useRouter } from "next/router";

export const removeUndefined = (o) =>
  Object.entries(o)
    .filter(([, val]) => val !== undefined)
    .reduce((result, [key, val]) => {
      result[key] = val;
      return result;
    }, {});

const Landingpage = ({ trendingPost, recentPost, theme: { Color } }) => {
  const router = useRouter();
  // console.log(trendingPost,recentPost)
  const { pathname, query } = router;
  const selectItem = ["All", "Few", "none"];
  const [tab, setTab] = useState(FlexCenter);
  const [tabItem, setTabItem] = useState("Trending");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const changeQuery = (val) => {
    router?.push({
      pathname,
      query: removeUndefined({
        // ...query,
        [val]: val,
      }),
    });
  };
  const refreshData = () => {
    router?.replace(router.asPath);
    setIsRefreshing(true);
  };

  const onclick = (title) => {
    if (title === "Recent") {
      changeQuery("recent");
      // refreshData()
      setTab(recentPost && recentPost.data);
      setTabItem(title);
    } else if (title === "Trending") {
      changeQuery("trending");
      // refreshData()
      // setTab(FlexCenter2);
      setTab(trendingPost && trendingPost.data);

      setTabItem(title);
    } else if (title === "Most liked") {
      refreshData();
      setTab(FlexCenter3);
      setTabItem(title);
    }
  };

  useEffect(() => {
    setIsRefreshing(false);
  }, [trendingPost, recentPost]);

  return (
    <BodyDiv Color={Color}>
      <Nav NavArrayContent={NavArray} page={"landing"} />
      <div className={"body"}>
        <div className={"flex-left"}>
          <FlexLeftBody FlexLeftArray={Flexleft} />
        </div>
        <div className={"landingpageflexcenter"}>
          <FlexCenterHeader onclick={onclick} tabItem={tabItem} />
          <FlexCenterSubHeader details={"All"} selectItem={selectItem} />
          <FlexCenterBody FlexBodyArray={tab} />
        </div>
        <div className="flex-right">
          <FlexRightBody FlexRightArray={FlexRightContent} />
          <FlexRightFooter />
        </div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(Landingpage);
