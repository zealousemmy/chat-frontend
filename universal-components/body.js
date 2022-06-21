import styled from "styled-components";

export const BodyDiv = styled.div`
  background-color: ${({ Color }) => Color.BodyColor && Color.BodyColor};
  background-image: url(${({ Bg }) => (Bg ? Bg.src : "")});
  background-position: ${({ Bg }) => Bg && "center"};
  background-repeat: ${({ Bg }) => Bg && "no - repeat"};
  background-size: ${({ Bg }) => Bg && "cover"};
  height: ${({ Bg }) => Bg && "100vh"};

  .body {
    display: flex;
    justify-content: space-between;
    padding: 40px 60px;

    .flex-right {
      @media (max-width: 765px) {
        display: none;
      }
    }

    .flex-left {
      @media (max-width: 765px) {
        display: none;
      }
    }

    .landingpageflexcenter {
      width: 100%;
      margin: 0 20px;

      .channelHeader {
        color: ${({ Color }) => Color.TextColor && Color.TextColor};
        h2 {
          font-style: normal;
          font-weight: 600;
          font-size: 28px;
          @media (max-width: 702px) {
            display: none;
          }
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

        @media (max-width: 500px) {
          margin: 20px 10px;
        }
      }

      .channelbodyfooter {
        margin-top: 40px;

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

        @media (max-width: 500px) {
          margin: 30px 10px;
        }
      }

      .edit-button {
        border-radius: 5px;
        position: relative;
        top: -4.5rem;
        left: 20.3rem;
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

      /* @media (max-width: 1235px) {
        width: 56%;
      }

      @media (max-width: 1024px) {
        width: 55%;
      }

      @media (max-width: 925px) {
        width: 48%;
      }

      @media (max-width: 820px) {
        width: 44%;
      }

      @media (max-width: 720px) {
        width: 100%;
      } */

      @media (max-width: 500px) {
        width: 100%;
        margin: 0px;
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
      border-radius: 9px;
      padding-bottom: 2.5rem;

      .notificationRightHeader {
        text-align: center;
        padding: 10px 0px;
      }
      .notification-body {
        width: 100%;
        height: 12rem;
      }
    }

    @media (max-width: 1024px) {
      padding: 30px 25px;
    }

    @media (max-width: 920px) {
      padding: 20px 15px;
    }

    @media (max-width: 500px) {
      padding: 0px;
    }
    .admin-sidenav {
      @media (max-width: 1090px) {
        display: none;
      }
    }
    .admin-component-display {
      width: 100%;
      padding: 0 20px;
      @media (max-width: 950px) {
        padding: 0;
      }
    }
  }

  .sign {
    width: 100%;
    height: 89vh;
    display: flex;
    justify-content: center;

    .signmain {
      width: 40rem;
      margin: auto;

      .signbody {
        width: 100%;
        padding: 20px;
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

            @media (max-width: 414px) {
              font-size: 20px;
            }
          }

          p {
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            padding: 3px 0px;

            @media (max-width: 414px) {
              font-size: 10px;
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
      @media (max-width: 720px) {
        width: 95%;
      }
    }

    @media (max-width: 720px) {
      height: 80vh;
    }

    @media (max-width: 500px) {
      height: 87vh;
    }
  }

  .settings {
    width: 65%;
    margin: 0px auto;

    .settingHeader {
      padding: 20px 0px;

      .settingHeaderfirst {
        text-align: left;

        h4 {
          font-weight: 500;
          font-size: 20px;
        }

        p {
          font-weight: 400;
          font-size: 13px;
        }
      }

      .settingHeadersecond {
        width: 60%;
        margin: 0px auto;
        padding: 30px 0px;
        text-align: center;
        position: relative;

        .settingHeadersecondImage {
          width: 150px;
          height: 150px;
          margin: 0px auto;
          border-radius: 50%;
        }

        button {
          position: relative;
          top: -1rem;
          border: none;
          outline: none;
          color: ${({ Color }) => Color.PrimaryColor};
          padding: 8px 20px;
          font-size: 15px;
          font-weight: 500px;
          background-color: ${({ Color }) => Color.BBg};
          border-radius: 5px;

          @media (max-width: 290px) {
            /* top: -2rem; */
            left: 2rem;
          }
        }
      }
    }

    .settingbody {
      padding: 30px 0px;

      .settingItem {
        padding: 20px 0px;

        .info {
          .infoheader {
            h3 {
              font-weight: 200px;
              font-size: 15px;
              color: ${({ Color }) => Color.TextColor};
            }
          }
        }
      }
    }
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;
