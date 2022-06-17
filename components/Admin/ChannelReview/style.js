import styled from "styled-components";
import Container from "../../../universal-components/Container";
import { TableWrapper } from "../../../universal-components/Table/styles";

export const ChannelReviewWrapper = styled.div`
  width: 100%;
  ${Container} {
    width: 100%;
    gap: 50px;
  }
`;
export const ChannelReview__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  text-transform: capitalize;
`;

export const ChannelReview__WrapperCards = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;

  @media (max-width: 950px) {
    flex-wrap: wrap;
    gap: 20px;
  }
  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ChannelReview__Users = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const ChannelReview__UsersTable = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  margin-top: 2rem;

  ${TableWrapper} {
    width: 70%;
  }

  .editBtn {
    font-size: 1.7rem;
    color: #0096ff;
    font-weight: 200;
    cursor: pointer;
  }

  .statusActive {
    color: #1f9254;
  }
  .statusInactive {
    color: red;
  }
`;
