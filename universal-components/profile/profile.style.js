import styled from "styled-components";

export const ProfileDivStyle = styled.div`
  background-color: ${({ Color }) => Color.PrimaryColor};
  padding: 10px 0px;
  text-align: center;
  border-radius: 8px 8px 0px 0px;
  border-bottom: 1px solid black;
  position: relative;

  .profile-header {
    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: ${({ Color }) => Color.TextColor};
    }
  }

  .profile-body {
    margin: 30px 0px;
    padding: 12px 0px;
    .background-blur {
      background-color: ${({ Color }) => Color.TertiaryColor};
      width: 100%;
      height: 18px;
      filter: blur(24px);
    }

    .profile-image {
      position: absolute;
      top: 33%;
      left: 36%;
    }

    .profile-footer {
      h5 {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
      }
    }
  }
`;
