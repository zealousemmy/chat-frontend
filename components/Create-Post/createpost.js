import styled from "styled-components";

export const CreatePostStyles = styled.div`
  background-color: ${({ Color }) => Color.PrimaryColor};
  width: ${({ width }) => width};
  border: 1px solid ${({ Color }) => Color.SecondaryColor};
  margin: 0px auto;
  text-align: center;
  padding: 20px 0px;
  border-radius: 10px;

  .create-post-body {
    .create-post-header {
      width: 65%;
      margin: 0 auto;
      text-align: left;

      h3 {
        font-weight: 600;
        font-size: 18px;
        color: ${({ Color }) => Color.TextColor};
      }
    }

    .create-post-tab {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      div {
        button {
          border: none;
          outline: none;
          padding: 12px 14px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          color: ${({ Color }) => Color.TextColor};
          background-color: ${({ Color }) => Color.PrimaryColor};
        }

        .active {
          background-color: ${({ Color }) => Color.TertiaryColor};
          border-bottom: 1px solid ${({ Color }) => Color.TextColor};
        }
      }

      @media (max-width: 414px) {
        flex-direction: column;
      }
    }

    .textareabody {
      width: 100%;

      .textarea {
        background-color: red;
      }
    }
  }
`;
