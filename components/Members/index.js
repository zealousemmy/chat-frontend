import React from "react";
import Container from "../../universal-components/Container";
import UserCard from "../../universal-components/UserCard";
import {
  MembersWrapper,
  MembersWrapper__Content,
  MembersWrapper__Header,
  MembersWrapper__HeaderTitle,
  MembersWrapper__HeaderInput,
} from "./styles";
import SearchInput from "../../universal-components/Search-Input";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import Nav from "../../universal-components/Nav";
import { withTheme } from "styled-components";

const Members = ({ title, userArray }) => {
  return (
    <>
      <MembersWrapper>
        <Container>
          <MembersWrapper__Header>
            <MembersWrapper__HeaderTitle className="header-text-large">
              {title} ({userArray.length})
            </MembersWrapper__HeaderTitle>

            <MembersWrapper__HeaderInput>
              <SearchInput placeholder="Search for any member here" />
            </MembersWrapper__HeaderInput>
          </MembersWrapper__Header>
          <MembersWrapper__Content>
            {userArray.length === 0
              ? "No user Found"
              : userArray.map(({ id, avatar, name, menu }) => (
                  <UserCard avatar={avatar} name={name} menu={menu} key={id} />
                ))}
          </MembersWrapper__Content>
        </Container>
      </MembersWrapper>
    </>
  );
};

export default withTheme(Members);
