import styled from "styled-components";

export const WalletWrapper = styled.div`
  display: flex;
  width: 65%;
  height: 100vh;
  margin: 2rem auto;
  justify-content: space-between;
  position: relative;
  overflow-y: ${({ show }) => (show ? "hidden" : "auto")};

  @media (max-width: 950px) {
    flex-direction: column;
    width: 90%;
    gap: 30px;
  }
`;

export const WalletWrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 58%;
  gap: 5rem;

  @media (max-width: 950px) {
    width: 100%;
    gap: 1rem;
  }
`;
export const WalletBalance = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  position: relative;

  .wallet__balance-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 950px) {
      flex-direction: column;
      gap: 30px;
      margin-top: 10px;
    }
  }

  .wallet__balance-contentText {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    @media (max-width: 950px) {
      gap: 10px;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }

  .wallet__balance-contentAmount {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    font-size: 1.2rem;
    font-weight: 600;

    .wallet__balance-contentButton {
      display: flex;
      position: absolute;
      align-items: center;
      width: 150px;
      justify-content: center;
      gap: 10px;
      padding: 10px 15px;
      background-color: #0096ff;
      border: 2px solid #0096ff;
      color: #ffffff;
      text-transform: capitalize;
      border-radius: 5px;

      bottom: -60px;
      left: 0;
      transform: translateX(-30%);

      svg {
        font-size: 2rem;
      }

      @media (max-width: 950px) {
        position: relative;
        bottom: 0;
        left: 0;
        margin: auto;
        transform: translateX(0);
      }
    }
    @media (max-width: 950px) {
      align-items: center;
    }
  }
`;

export const WalletTransactions = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  h4 {
  }
  .wallet__transactions-content {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    background-color: #ffffff;
    box-shadow: 0.5px 0.5px 4px #878787;
    border-radius: 10px;

    thead {
      width: 100%;
      display: flex;
      tr {
        font-weight: 500;
      }

      @media (max-width: 450px) {
        display: none;
      }
    }

    tbody {
      width: 100%;
      border-radius: 0 0 10px 10px;
      padding-bottom: 10px;
      tr {
        font-weight: 300;
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
      align-items: flex-start;
      justify-content: flex-start;
      padding: 10px;

      @media (max-width: 450px) {
        flex-direction: column;
        justify-content: center;
        gap: 10px;
      }
    }

    td {
      text-align: left;
      display: flex;
      width: 30%;
      justify-content: flex-start;

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
  }
`;

export const WalletWrapperRight = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 25%;

  @media (max-width: 950px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const WalletInformation = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  .wallet__info-header {
    padding: 20px;
    border-bottom: 2px solid #aaa;
    justify-content: center;
    display: flex;
    text-align: center;
    h3 {
      font-weight: 500;
    }
  }

  .wallet__info-content {
    display: flex;
    flex-direction: column;
    padding: 25px 15px;
    gap: 20px;
    width: 100%;

    @media (max-width: 450px) {
      padding: 5px;
    }
  }

  .wallet__info-contentItem {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    span {
      color: #0096ff;
    }

    @media (max-width: 450px) {
      padding: 5px;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }
`;