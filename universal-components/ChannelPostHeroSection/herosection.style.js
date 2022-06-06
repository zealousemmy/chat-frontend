import styled from "styled-components";

export const ChannelPostHeroSectionStyled = styled.div`
  width: 824px;
  border-radius: 10px 10px 0px 0px;
  background-color: ${({ Color }) => Color.PrimaryColor};
  border-radius: 5px;

  .postsheader {
    .postImages {
      border-radius: 5px;
    }
  }

  .postbody {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      color: ${({ Color }) => Color.TextColor};
      padding: 15px 0px;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: ${({ Color }) => Color.TextColor};
    }

    .postbody-content {
      display: flex;
      background-color: ${({ Color }) => Color.TertiaryColor};
      margin: 20px 0px;
      border-radius: 5px;

      .postbody-item {
        text-align: center;
        padding: 5px 10px;
      }
    }
  }
`;
