import styled from "styled-components";
import Container from "../../../universal-components/Container";

export const ApprovalsWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;

  ${Container} {
    @media (max-width: 700px) {
      width: 95%;
    }
  }
`;
export const ApprovalsHeader = styled.div`
  h2 {
    text-transform: capitalize;
  }

  @media (max-width: 450px) {
    gap: 30px;
    width: 95%;
    margin: auto;
  }
`;

export const ApprovalsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media (max-width: 450px) {
    gap: 30px;
    width: 95%;
    margin: auto;
  }
`;
export const ApprovalsCard = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;

  @media (max-width: 600px) {
    padding-top: 20px;
    flex-direction: column;
  }
`;
export const ApprovalsCard_Image = styled.div`
  height: 100%;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    object-position: center;
    border-radius: 15px;
    padding: 10px 0;

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ApprovalsCard_Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  gap: 10px;

  p {
    font-weight: 600;
    display: flex;

    span {
      font-weight: 300;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 5px;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
    text-align: center;
    padding: 10px;
  }
`;

export const ApprovalsCard_Button = styled.div`
  height: 80px;
  width: 150px;
  button {
    background-color: #1b5033;
    color: #02ff67;
    width: 100%;
    height: 100%;
    text-align: center;
    border: 0;
    cursor: pointer;
    border-radius: 0 10px 10px 0;
    @media (max-width: 600px) {
      border-radius: 0;
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
