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
      width: 80%;
      margin: 0 20px;
      min-height: 100vh;

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
          margin-bottom: 20px;
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

      .channelpostcenter {
        position: relative;
        top: -4.5rem;
        width: 100%;
        text-align: center;

        .edit-button {
          border-radius: 5px;
          width: 173px;
          margin: 0px auto;
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

      @media (max-width: 1235px) {
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
      }

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
        background-color: ${({ Color }) => Color.SubSecondaryColor};
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

    .monetization {
      width: 65%;
      margin: 0px auto;

      .monetization-header {
        width: 100%;

        .monetized-header {
          h3 {
          }
        }

        .monetized-header-body {
          background-color: ${({ Color }) => Color.PrimaryColor};
          padding: 10px;
          border-radius: 8px;

          h4 {
            font-weight: 300;
            text-decoration: underline;
            padding: 10px 0px;
          }

          .monetized-header-body-teams {
            p {
              padding: 3px 0px;
              font-weight: 200;
            }
          }
        }
      }

      .monetization-body {
        width: 100%;
        padding: 20px 0px;

        .monetization-body-header {
          h3 {
          }
        }

        .monetization-body-cards {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;

          .monetized-card {
            background-color: ${({ Color }) => Color.PrimaryColor};
            text-align: center;
            width: 47%;
            margin: 10px 0px;
            border-radius: 8px;

            .monetized-card-image {
              width: 100%;
              border-bottom: 1px solid ${({ Color }) => Color.TextColor};

              .monetized-card-image-items {
                width: 100px;
                height: 67px;
                border-radius: 8px;
                margin: 0px auto;
                margin-top: 20px;
                margin-bottom: 10px;
              }

              .monetized-card-title {
                padding: 10px;
                p {
                }
              }
            }

            .monetized-card-body {
              padding: 20px;

              p {
                padding: 3px 0px;
              }

              .monetized-card-link {
                display: flex;
                justify-content: center;
                padding: 3px 0px;

                a {
                  color: ${({ Color }) => Color.TextColor};
                }
              }

              .monetized-card-body-button {
                .apply {
                  background-color: ${({ Color }) => Color.BBg};
                  color: ${({ Color }) => Color.TertiaryColor};
                  border: none;
                  outline: none;
                  width: 80px;
                  padding: 6px 0px;
                  border-radius: 4px;
                  margin: 0px 4px;
                }

                .cancel {
                  background-color: ${({ Color }) => Color.TertiaryColor};
                  color: ${({ Color }) => Color.BBg};
                  border: none;
                  outline: none;
                  width: 80px;
                  padding: 6px 0px;
                  border-radius: 4px;
                  margin: 0px 4px;
                }

                .banned {
                  background-color: red;
                  color: ${({ Color }) => Color.TextColor};
                  border: none;
                  outline: none;
                  width: 80px;
                  padding: 6px 0px;
                  border-radius: 4px;
                  margin: 0px 4px;
                }
              }
            }
            @media (max-width: 520px) {
              width: 95%;
            }
          }
        }
      }

      @media (max-width: 750px) {
        width: 80%;
      }

      @media (max-width: 620px) {
        width: 95%;
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
        /* @media (max-width: 500px) {
          margin: 20px 0px;
        } */
      }

      @media (max-width: 720px) {
        width: 95%;
      }
    }

    @media (max-width: 720px) {
      height: 80vh;
    }

    @media (max-width: 500px) {
      /* display: unset;
      justify-content: unset; */
      height: ${({ signup }) => (signup ? "100vh" : "90vh")};
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

  @media (max-width: 500px) {
    height: ${({ Bg }) => Bg && "unset"};
  }
`;
