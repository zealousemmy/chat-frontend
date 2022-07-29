import React from "react";
import { withTheme } from "styled-components";
import { CreateChannel } from "./create.style";

const CreateChannelTab = ({
  theme: { Color },
  button_text,
  text,
  HandleClick,
}) => {
  return (
    <CreateChannel Color={Color}>
      <div className={"createchannelheader"}>
        <p>{text}</p>
      </div>
      <div className={"createchannelbody"}>
        <button onClick={HandleClick}>{button_text}</button>
      </div>
    </CreateChannel>
  );
};

export default withTheme(CreateChannelTab);
