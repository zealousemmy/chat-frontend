import styled from "styled-components";

export const BodyDiv = styled.div`
  background-color: ${({ Color }) => Color.BodyColor && Color.BodyColor};

  .body {
    display: flex;
    justify-content: space-between;
    padding: 40px 60px;
    /* align-items: center; */

    .landingpageflexcenter {
      width: 65%;

      .channelHeader {
        color: ${({ Color }) => Color.TextColor && Color.TextColor};
        h2 {
          font-style: normal;
          font-weight: 600;
          font-size: 28px;
        }
      }

      .channel {
        margin-top: 40px;
        color: ${({ Color }) => Color.TextColor && Color.TextColor};
        h2 {
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
        }
      }

      .channelbodyfooter {
        margin-top: 50px;

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

      .edit-button {
        border-radius: 5px;
        position: absolute;
        top: 71%;
        left: 42.7%;
        width: 173px;
        padding: 14px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ Color }) => Color.BBg};
        color: ${({ Color }) => Color.PrimaryColor};

        h3 {
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          padding: 0px 4px;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
        }

        .edit-image {
          background-color: ${({ Color }) => Color.BBg};
          color: ${({ Color }) => Color.PrimaryColor};
          border: 1px solid #ffffff;
        }
      }
    }

    .leftbody {
      width: 90px;
      height: 100px;
    }

    /* .rightbody {
      width: 150px;
      height: 100px;
    } */

    .notificationRight {
      background-color: ${({ Color }) => Color.PrimaryColor};
    }
  }

  .sign {
    width: 100%;
    height: 86.8vh;
    /* padding-top: 10px; */
    background-image: url(${({ Bg }) => (Bg ? Bg.src : "")});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* background-repeat: ; */

    .signmain {
      width: 50rem;
      height: 100%;
      margin: 0px auto;
      padding: 0.7rem;
    }

    .signmainbody {
      width: 40rem;
      height: 32rem;
      margin: 0px auto;
    }

    .signbody {
      width: 100%;
      height: 100%;
      background-color: ${({ Color }) => Color.TextColor && Color.TextColor};
      margin: 0px auto;
      padding: ${({ sign }) => sign && "60px 0px"};
      border-radius: 10px;

      .signheader {
        padding: 5px 0px;
        text-align: center;
        color: ${({ Color }) => Color.PrimaryColor && Color.PrimaryColor};

        h2 {
          font-style: normal;
          font-weight: 600;
          font-size: 32px;
        }

        p {
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
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
        background-color: ${({ Color }) => Color.PrimaryColor};

        p {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          margin: 0px 8px;
          color: ${({ Color }) => Color.TextColor};
        }
      }
    }
  }
`;
