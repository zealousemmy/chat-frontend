import { withTheme } from "styled-components";
import { FlexCenterStyles } from "./flexcenter.style";

const FlexCenterHeader = ({ theme: { Color }, onclick, tabItem }) => {
  const Title = [
    { title: "Recent" },
    { title: "Trending" },
    { title: "Most liked" },
  ];
  return (
    <FlexCenterStyles Color={Color}>
      <div className={"landingpagecenter"}>
        {Title.map((item, key) => (
          <div
            key={key}
            onClick={() => onclick(item.title)}
            className={`${item.title === tabItem && "active"}`}
          >
            <p>{item.title}</p>
          </div>
        ))}
        {/* <div onClick={onclick}>
          <p>Trending</p>
        </div>
        <div onClick={onclick}>
          <p>Most Viewed</p>
        </div> */}
      </div>
    </FlexCenterStyles>
  );
};

export default withTheme(FlexCenterHeader);
