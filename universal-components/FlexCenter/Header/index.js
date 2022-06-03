import { withTheme } from "styled-components";
import { FlexCenterStyles } from "./flexcenter.style";

const FlexCenterHeader = ({ theme: { Color } }) => {
  return (
    <FlexCenterStyles Color={Color}>
      <div className={"landingpagecenter"}>
        <div>
          <p>Resent</p>
        </div>
        <div>
          <p>Trending</p>
        </div>
        <div>
          <p>Most Viewed</p>
        </div>
      </div>
    </FlexCenterStyles>
  );
};

export default withTheme(FlexCenterHeader);
