import styled from "styled-components";
import Container from "../../universal-components/Container";

export const MembersWrapper = styled.div`
  margin-top: 2rem;
  ${Container} {
    margin: auto;
    display: flex;
    gap: 20px;
  }
`;

export const MembersWrapper__Header = styled.div``;
export const MembersWrapper__HeaderTitle = styled.div``;
export const MembersWrapper__HeaderInput = styled.div``;

export const MembersWrapper__Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
