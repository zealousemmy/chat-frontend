import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import FlexLeftBody from "../../universal-components/FlexLeft";
import { FlexleftContent } from "../../util/New-User-Select-Channel/body/FlexRight";
import { FlexArrayContent } from "../../util/New-User-Select-Channel/body/FlexLeft";
import CreateChannelTab from "../../universal-components/CreateChannelTab";
import Cards from "../../universal-components/Cards";
import { CardsArray } from "../../util/New-User-Select-Channel/CardsArray";

const UserChannel = ({ theme: { Color } }) => {
  return (
    <BodyDiv Color={Color}>
      <Nav NavArrayContent={NavArrayDashboard} />
      <div className={"body"}>
        <div className={"flex-left"}>
          <FlexLeftBody FlexLeftArray={FlexArrayContent} />
        </div>
        <div className={"landingpageflexcenter"}>
          <div className={"channelHeader"}>
            <h2>Welcome to channels</h2>
          </div>
          <CreateChannelTab
            text={"joshua's post"}
            button_text={"create post"}
          />
          <div className={"channelbodyfooter"}>
            <h3>Suggested channels</h3>
            <p>Pick three channels </p>
            <Cards CardArray={CardsArray} />
          </div>
        </div>
        <div className="flex-right">
          <FlexLeftBody FlexLeftArray={FlexleftContent} />
        </div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(UserChannel);
