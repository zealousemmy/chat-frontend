import styled from "styled-components";
export const UserCardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  justify-content: space-between;
  padding: 0.7rem;
  gap: 20px;
`;

export const UserCardWrapper__avatar = styled.div`
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: center;
  img{
    border-radius: 100%;
  }
`;

export const UserCardWrapper__text = styled.div`
  display: flex;
  width: 100%;
`;

export const UserCardWrapper__menu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  svg {
    font-size: 1.3rem;
    color: #0096ff;
  }
`;

export const UserCardWrapper__menuContainer = styled.div`
  background-color: #b6daf3;
  display: flex;
  flex-direction: column;
  width: 150px;
  border-radius: 10px;

  position: absolute;
  z-index: 9999;
  top: 20px;
  right: 15%;

  button {
    padding: 1rem;
    border: 0;
    background-color: transparent;
    border-bottom: 1px solid #ffffff;
    cursor: pointer;

    &:last-of-type {
      border: 0;
    }
  }
`;
