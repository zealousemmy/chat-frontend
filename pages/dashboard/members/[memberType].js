import React from "react";
import { useRouter } from "next/router";
import { withTheme } from "styled-components";
import Users from "../../../components/Users";
import { UserDetailsConfig } from "../../../universal-components/UserCard/Config";

const UserType = () => {
  const router = useRouter();
  const title = router.query.memberType;
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
