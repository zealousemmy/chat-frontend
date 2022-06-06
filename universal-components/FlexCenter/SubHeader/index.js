import { withTheme } from "styled-components";
import { SubHeaderStyles } from "./subheader";

const FlexCenterSubHeader = () => {
  return (
    <SubHeaderStyles>
      <hr />
      <div className={"optionbody"}>
        <p>Sort by:</p>
        <select name="option">
          <option value="All">All</option>
          <option value="Few">Few</option>
          <option value="All">none</option>
        </select>
      </div>
    </SubHeaderStyles>
  );
};

export default withTheme(FlexCenterSubHeader);
