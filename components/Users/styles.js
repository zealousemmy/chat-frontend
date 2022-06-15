import styled from "styled-components";
import Container from "../../universal-components/Container";

<<<<<<< HEAD:components/Members/styles.js
export const MembersWrapper = styled.div`
  /* margin-top: 2rem; */
=======
export const UsersWrapper = styled.div`
  margin-top: 2rem;
>>>>>>> 2d8cde9d58910f9dbd61f6f6b3dfc3a7e34be365:components/Users/styles.js
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
