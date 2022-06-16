import styled from "styled-components";
import Container from "../../universal-components/Container";

export const UsersWrapper = styled.div`
  margin-top: 2rem;
  ${Container} {
    margin: auto;
    display: flex;
    gap: 20px;
  }
`;

export const UsersWrapper__Header = styled.div``;
export const UsersWrapper__HeaderTitle = styled.div`
  text-transform: capitalize;
`;
export const UsersWrapper__HeaderInput = styled.div``;

export const UsersWrapper__Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
