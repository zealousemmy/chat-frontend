import React, { useState } from "react";
import Image from "next/image";
import { FaEllipsisH } from "react-icons/fa";
import {
  UserCardWrapper,
  UserCardWrapper__avatar,
  UserCardWrapper__text,
  UserCardWrapper__menu,
  UserCardWrapper__menuContainer,
} from "./styles";
import { withTheme } from "styled-components";

const UserCard = ({ avatar, name, menu }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <UserCardWrapper>
      <UserCardWrapper__avatar >
        <Image src={avatar} alt={name} width={"60px"} height={"60px"}/>
      </UserCardWrapper__avatar>
      <UserCardWrapper__text>{name}</UserCardWrapper__text>
      <UserCardWrapper__menu>
        <FaEllipsisH onClick={() => setIsActive(!isActive)} />
        {isActive && (
          <UserCardWrapper__menuContainer>
            {menu.map(({ label, menuId }) => (
              <button key={menuId}>{label}</button>
            ))}
          </UserCardWrapper__menuContainer>
        )}
      </UserCardWrapper__menu>
    </UserCardWrapper>
  );
};

export default withTheme(UserCard);
