import React from "react";
import Container from "../../universal-components/Container";
import UserCard from "../../universal-components/UserCard";
import { UserDetailsConfig } from "../../universal-components/UserCard/Config";
import {
  MembersWrapper,
  MembersWrapper__Content,
  MembersWrapper__Header,
  MembersWrapper__HeaderTitle,
  MembersWrapper__HeaderInput,
} from "./styles";
import SearchInput from "../../universal-components/Search-Input";

const Members = () => {
  return (
    <MembersWrapper>
      <Container>
        <MembersWrapper__Header>
          <MembersWrapper__HeaderTitle>
            All Members ({UserDetailsConfig.length})
          </MembersWrapper__HeaderTitle>

          <MembersWrapper__HeaderInput>
            <SearchInput placeholder="Search for any member here" />
          </MembersWrapper__HeaderInput>
        </MembersWrapper__Header>
        <MembersWrapper__Content>
          {UserDetailsConfig.map(({ id, avatar, name, menu }) => (
            <UserCard avatar={avatar} name={name} menu={menu} key={id} />
          ))}
        </MembersWrapper__Content>
      </Container>
    </MembersWrapper>
  );
};

export default Members;
