import { withTheme } from "styled-components";
import { SubHeaderStyles } from "./subheader";

const FlexCenterSubHeader = () => {
  return (
    <SubHeaderStyles>
      <hr />
    </SubHeaderStyles>
  );
};

export default withTheme(FlexCenterSubHeader);
