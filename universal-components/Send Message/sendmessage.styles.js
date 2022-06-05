import styled from "styled-components";

export const MessageStyle = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ Color }) => Color.TextColor};

  .profile-pics{
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  .message-details {
    margin-left: 20px;
    width: 88%;
    border: 1px solid black;
    display: flex;
    align-items: center;

    .message-details-input {
      width: 80%;

      input {
        width: 80%;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.5;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
      }
    }

    .message-details-button {

      button {
        background-color: ${({ Color }) => Color.BBg};
        color: ${({ Color }) => Color.PrimaryColor};
        border-radius: 9px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        padding: 12px;
      }
    }
  }
`;
