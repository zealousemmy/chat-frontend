import styled from "styled-components";

export const ReferralWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 2rem auto;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-direction: column;

  @media (max-width: 950px) {
    width: 90%;
  }

  .referral__title {
    width: 60%;
    display: flex;
    margin: auto;

    @media (max-width: 950px) {
      width: 100%auto;
    }
  }
`;

export const ReferralInformation = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin: auto;

  h2 {
    width: 100%;
  }

  .referral__info-footer {
    position: relative;
    text-align: center;
    margin: 30px 0;
    font-weight: 500;
    width: 100%;

    &::before {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 50%;
      width: 60%;
      background: #000;
      height: 2px;
      transform: translateX(-50%);

      @media (max-width: 950px) {
        width: 100%;
      }
    }

    &::after {
      content: "OR";
      position: absolute;
      bottom: -13px;
      left: 50%;
      font-size: 20px;
      padding: 0 10px;
      background: #d8d8d8;
      transform: translateX(-50%);
    }
    @media (max-width: 950px) {
      width: 100%;
    }
  }

  .referral__info-container {
    flex-direction: column;
    display: flex;
    background-color: #ffffff;
    border-radius: 10px;
    width: 60%;
    margin: auto;

    @media (max-width: 950px) {
      width: 100%;
    }
  }
  .referral__info-header {
    padding: 10px;
    border-bottom: 2px solid #aaa;
    width: 100%;
  }

  .referral__info-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;

    p {
      width: 100%;
    }
  }

  .referral__infoCopyButton {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: fit-content;
    cursor: pointer;
    padding: 10px;
    margin: auto;
    background-color: #0096ff;
    border: 2px solid #0096ff;
    color: #ffffff;
    text-transform: capitalize;
    border-radius: 5px;
  }
  @media (max-width: 950px) {
    width: 100%;
  }
`;
export const ReferralFriend = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  width: 60%;
  margin: 30px auto;

  @media (max-width: 950px) {
    width: 100%;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  border-radius: 10px;

  .referral__email-friend-Button {
    display: flex;
    align-items: center;
    width: 200px;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    padding: 10px;
    margin: auto;
    background-color: #0096ff;
    border: 2px solid #0096ff;
    color: #ffffff;
    text-transform: capitalize;
    border-radius: 5px;
  }
`;
export const FormRow = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  label {
    text-transform: capitalize;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 13px 10px;
    border-radius: 10px;
    font-weight: 600;
    border: 0;
    outline: 0;
    box-shadow: 0 0 1px 1px #aaa;
    resize: none;
    margin-bottom: 20px;

    &:focus {
      outline: 0;
      box-shadow: 0 0 5px 1px #aaa;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ReferralTable = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  width: 60%;
  margin: auto;

  h4 {
  }
  .referral__table-content {
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

export const referralWrapperRight = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 25%;

  @media (max-width: 950px) {
    flex-direction: column;
    width: 100%;
  }
`;
