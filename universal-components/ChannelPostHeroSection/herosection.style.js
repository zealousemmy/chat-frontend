import styled from "styled-components";

export const ChannelPostHeroSectionStyled = styled.div`
  width: 100%;

  /* @media (min-width: 500px) {
    width: 824px;
  } */
  //border-radius: 10px 10px 0px 0px;
  background-color: ${({ Color }) => Color.PrimaryColor};
  border-radius: 5px;
  padding-bottom: 30px;
  margin-bottom: 50px;

  .postsheader {
    position: relative;
    min-width: 100%;
    height: 184px;

    .postsheaderimage {
      width: 100%;
      height: 184px;

      .postImages {
        border-radius: 5px;
      }
    }

    .posthero {
      border-radius: 5px;
      background-image: linear-gradient(to right, #f57360, #f34c24);
      width: 100%;
      height: 144px;
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
      font-weight: 500;
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
