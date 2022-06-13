import styled from "styled-components";

export const MessageStyle = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ Color }) => Color.TextColor};

  .profile-pics {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  .message-details {
    margin-left: 20px;
    width: 88%;
    display: flex;
    align-items: center;

    .message-details-input {
      width: 78%;

      input {
        width: 100%;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        padding: 8px 14px;
      }
    }

    .message-details-pics {
      padding: 0px 10px;
      display: flex;
      justify-content: center;
    }

    .message-details-button {
      button {
        background-color: ${({ Color }) => Color.BBg};
        color: ${({ Color }) => Color.PrimaryColor};
        border-radius: 9px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        padding: 8px 12px;
        border: none;
        outline: none;
      }
    }
  }
`;
