import React from "react";
import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";

const ChannelPost = () => {
  return (
    <BodyDiv>
      <Nav NavArrayContent={NavArrayDashboard} />
    </BodyDiv>
  );
};

export default ChannelPost;
BodyDiv;
