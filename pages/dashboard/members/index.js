import React from "react";
import { withTheme } from "styled-components";
import Members from "../../../components/Members";
import { UserDetailsConfig } from "../../../universal-components/UserCard/Config";

const members = () => {
  return <Members title={"all members"} userArray={UserDetailsConfig} />;
};

export default withTheme(members);
