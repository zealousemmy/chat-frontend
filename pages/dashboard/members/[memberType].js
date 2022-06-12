import { useRouter } from "next/router";
import React from "react";
import { withTheme } from "styled-components";
import Members from "../../../components/Members";
import { UserDetailsConfig } from "../../../universal-components/UserCard/Config";

const MemberType = () => {
//   const title = useRouter().query.memberType;
  const router = useRouter();
  const title = router.query.memberType
  const filteredArray = UserDetailsConfig.filter(({ role }) => role === title);

  return (
    <>
      {filteredArray.length > 0 ? (
        <Members title={title.replace("-", " ")} userArray={filteredArray} />
      ) : (
        `No data found`
      )}
    </>
  );
};

export default withTheme(MemberType);
