import React from "react";
import { withTheme } from "styled-components";
import { CreateChannel } from "./create.style";

const CreateChannelTab = ({ theme: { Color } }) => {
  return (
    <CreateChannel Color={Color}>
      <div className={"createchannelheader"}>
        <p>
          Join channels to explore your interest. Note that you will be only
          able to post in a channel that you have joined
        </p>
      </div>
      <div className={"createchannelbody"}>
        <button>Create a channel</button>
      </div>
    </CreateChannel>
  );
};

export default withTheme(CreateChannelTab);
