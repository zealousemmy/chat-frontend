import styled from "styled-components";

export const BodyDiv = styled.div`
  background-color: ${({ Color }) => Color.BodyColor && Color.BodyColor};

  .body {
    display: flex;
    justify-content: space-between;
    padding: 40px 60px;
    /* align-items: center; */

    .landingpageflexcenter {
      width: 850px;

      .channelHeader {
        h2 {
          font-style: normal;
          font-weight: 600;
          font-size: 28px;
        }
      }

      .channelbodyfooter {
        h3 {
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          color: ${({ Color }) => Color.TextColor && Color.TextColor};
        }

        p {
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          color: ${({ Color }) => Color.TextColor && Color.TextColor};
        }
      }
    }
  }

  .sign {
    width: 100%;
    height: 85vh;
    padding-top: 20px;
    background-image: url(${({ Bg }) => (Bg ? Bg.src : "")});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* background-repeat: ; */

    .signbody {
      width: 732px;
      height: 550px;
      background-color: ${({ Color }) => Color.TextColor && Color.TextColor};
      margin: 0px auto;
      /* text-align: center; */

      .signheader {
        padding: 15px 0px;
        text-align: center;
        color: ${({ Color }) => Color.PrimaryColor && Color.PrimaryColor};

        h2 {
          font-style: normal;
          font-weight: 600;
          font-size: 32px;
        }

        p {
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
        }
      }
    }

    .signfotter {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      div {
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 8px 6px;
        border-radius: 8px;
        /* background-color: ${({ Color }) => Color.PrimaryColor}; */

        p {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          margin: 0px 8px;
          color: ${({ Color }) => Color.PrimaryColor};
        }
      }
    }
  }
`;
