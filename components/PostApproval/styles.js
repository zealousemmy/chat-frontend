import styled from "styled-components";
import Container from "../../universal-components/Container";

export const ApprovalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${Container} {
    gap: 100px;
    display: flex;
    margin: 0px auto;
  }
`;

export const ApprovalWrapperContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;

  h1 {
    margin-bottom: 30px;
  }
`;
