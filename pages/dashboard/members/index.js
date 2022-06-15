import React from "react";
import { withTheme } from "styled-components";
import Users from "../../../components/Users";
import { UserDetailsConfig } from "../../../universal-components/UserCard/Config";

const Members = () => {
  return <Users title={"all members"} userArray={UserDetailsConfig} />;
};

export default withTheme(Members);
