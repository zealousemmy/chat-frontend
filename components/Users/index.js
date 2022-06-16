import React from "react";
import Container from "../../universal-components/Container";
import UserCard from "../../universal-components/UserCard";
import {
  UsersWrapper,
  UsersWrapper__Content,
  UsersWrapper__Header,
  UsersWrapper__HeaderTitle,
  UsersWrapper__HeaderInput,
} from "./styles";
import SearchInput from "../../universal-components/Search-Input";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import Nav from "../../universal-components/Nav";
import { withTheme } from "styled-components";

const Users = ({ title, userArray }) => {
  return (
    <>
      <Nav NavArrayContent={NavArrayDashboard} />
      <UsersWrapper>
        <Container>
          <UsersWrapper__Header>
            <UsersWrapper__HeaderTitle className="header-text-large">
              {title} ({userArray.length})
            </UsersWrapper__HeaderTitle>

            <UsersWrapper__HeaderInput>
              <SearchInput placeholder="Search for any member here" />
            </UsersWrapper__HeaderInput>
          </UsersWrapper__Header>
          <UsersWrapper__Content>
            {userArray.length === 0
              ? "No user Found"
              : userArray.map(({ id, avatar, name, menu }) => (
                  <UserCard avatar={avatar} name={name} menu={menu} key={id} />
                ))}
          </UsersWrapper__Content>
        </Container>
      </UsersWrapper>
    </>
  );
};

export default withTheme(Users);
