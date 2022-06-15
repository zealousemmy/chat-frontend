import { useRouter } from "next/router";
import React from "react";
import { withTheme } from "styled-components";
import Users from "../../../components/Users";
import { UserDetailsConfig } from "../../../universal-components/UserCard/Config";

const UserType = () => {
  const title = useRouter().query.memberType;
  const filteredArray = UserDetailsConfig.filter(({ role }) => role === title);

  return (
    <>
      {filteredArray.length > 0 ? (
        <Users title={title.replace("-", " ")} userArray={filteredArray} />
      ) : (
        `No data found`
      )}
    </>
  );
};

export default withTheme(UserType);
