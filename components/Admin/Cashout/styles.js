import styled from "styled-components";
import Container from "../../../universal-components/Container";

export const CashoutRequestWrapper = styled.div`
  ${Container} {
    width: 100%;
    gap: 50px;

    @media (max-width: 450px) {
      width: 100%;
      padding: 10px;
    }
  }
`;

export const CashoutRequest__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  text-transform: capitalize;
`;

export const CashoutRequest__WrapperCards = styled.div`
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

export const CashoutRequest__Users = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  h2 {
    font-weight: 400;
  }

  @media (max-width: 1300px) {
    width: 100%;
  }
`;
export const CashoutRequest__UsersTable = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;

  button {
    padding: 5px 15px;
    border-radius: 10px;
    text-align: center;
    border: 0;
    cursor: pointer;
    @media (max-width: 600px) {
      border-radius: 0;
      width: 100%;
    }
  }

  .verify {
    background-color: #1b5033;
    color: #02ff67;
  }

  .reject {
    background-color: #ff9d9d;
    color: #eb0000;
  }
`;

export const CashoutRequest__UsersTableFooter = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  justify-content: center;
  align-items: center;

  button {
    padding: 8px 9px;
    width: 31px;
    height: 31px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e0e0e0;
    border-radius: 5px;
    border: 0;
    box-shadow: #999 0 0 2px 0;
    cursor: pointer;
    font-weight: 700;

    &:hover {
      background-color: #0096ff;
      color: #ffffff;
    }
  }
  .control {
    background: transparent;
    border: 0;
    box-shadow: #777 0 0 0 0;
    padding: 0;
    width: fit-content;
    margin: 0 10px;

    &:hover {
      background: transparent;
      color: #000;
    }
  }
  .current {
    background-color: #0096ff;
    color: #fff;
  }
`;
