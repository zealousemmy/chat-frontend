import styled from "styled-components";
import Container from "../../../universal-components/Container";

export const OverviewWrapper = styled.div`
  ${Container} {
    width: 100%;
    gap: 50px;
  }
`;

export const OverviewInformation__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  text-transform: capitalize;
`;

export const OverviewInformation__WrapperCards = styled.div`
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

export const OverviewInformation__Users = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;
export const OverviewInformation__UsersTable = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  margin-top: 2rem;

  .verify {
    padding: 5px 15px;
    border-radius: 10px;
    background-color: #1b5033;
    color: #02ff67;
    text-align: center;
    border: 0;
    cursor: pointer;
    @media (max-width: 600px) {
      border-radius: 0;
      width: 100%;
    }
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
