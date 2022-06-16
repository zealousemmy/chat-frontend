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
`;

export const OverviewInformation__WrapperCards = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;

  @media (max-width: 600px) {
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

  h4 {
  }
  .OverviewInformation__UsersTable-content {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    background-color: #ffffff;
    box-shadow: 0.5px 0.5px 4px #878787;
    border-radius: 10px;

    thead {
      font-weight: 500;
      width: 100%;
      display: flex;

      @media (max-width: 450px) {
        display: none;
      }
    }

    tbody {
      width: 100%;
      border-radius: 0 0 10px 10px;
      padding-bottom: 10px;
      tr {
        &:nth-child(odd) {
          background-color: #e8e8e8;
        }
        @media (max-width: 450px) {
          &:first-child {
            border-radius: 10px 10px 0 0;
          }
        }
      }
    }

    tr {
      width: 100%;
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: flex-start;
      padding: 10px;
      font-weight: 500;

      @media (max-width: 450px) {
        flex-direction: column;
        justify-content: center;
        gap: 10px;
      }
    }

    td {
      text-align: left;
      display: flex;
      width: 20%;
      justify-content: flex-start;
      text-transform: capitalize;

      span {
        font-weight: 600;
        min-width: 90px;
        display: none;
        @media (max-width: 450px) {
          display: flex;
        }
      }
      &:first-of-type {
        width: 5%;
        @media (max-width: 450px) {
          width: 100%;
        }
      }

      @media (max-width: 1000px) {
        width: 100%;
        flex-wrap: wrap;
      }
    }

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

    .active {
      color: #1f9254;
    }
    .inactive {
      color: red;
    }
  }
`;

export const OverviewInformation__UsersTableFooter = styled.div`
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
