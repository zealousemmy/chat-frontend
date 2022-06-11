import styled from "styled-components";

export const NavDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ Color, navrouter }) =>
    navrouter ? Color.PrimaryColor : Color.TertiaryColor};
  padding: ${({ navrouter }) => (navrouter ? "3px 60px" : "8px 60px")};
  border-bottom: ${({ Color, navrouter }) =>
    !navrouter && `1px solid ${Color.BBg}`};
  position: ${({ signbottom }) => signbottom && "absolute"};
  bottom: ${({ signbottom }) => signbottom && "0px"};

  .firstnavitem {
    display: flex;
    justify-content: space-between;

    @media (max-width: 1090px) {
      padding: 10px;
      width: ${({ page }) => !page && "100%"};
    }

    .buttonbody {
      display: none;

      .buttonclass {
        .buttonitem {
          border: none;
          outline: none;
          background-color: ${({ Color }) => Color.BBg};
          padding: 5px 10px;
          display: flex;
          color: ${({ Color }) => Color.PrimaryColor};
          border-radius: 5px;

          p {
            background-color: ${({ Color }) => Color.PrimaryColor};
            color: ${({ Color }) => Color.BBg};
            padding: 0px 5px;
            margin-left: 10px;
            border-radius: 3px;
          }
        }
      }

      @media (max-width: 1090px) {
        display: block;
      }
    }
  }

  .thirdnavitem {
    display: flex;
    align-items: center;

    @media (max-width: 1090px) {
      justify-content: ${({ page }) => (page ? "center" : "space-between")};
      width: ${({ page }) => !page && "100%"};
      padding-top: 15px;
      padding: ${({ page }) => page && "10px 0px"};
      background-color: ${({ Color, page }) => !page && Color.PrimaryColor};
    }

    @media (max-width: 414px) {
      justify-content: ${({ page }) => page && "center"};
      width: 100%;
      padding-top: 15px;
      padding: ${({ page }) => page && "10px 0px"};
      background-color: ${({ Color }) =>
        Color.PrimaryColor && Color.PrimaryColor};
      box-shadow: ${({ page }) =>
        page &&
        "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"};
    }
  }

  .logobody {
    display: flex;
    align-items: center;

    .logoclass {
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
      }
    }

    .textstyle {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 800;
      font-size: 24px;
      margin: 0px 2px;
      color: ${({ Color }) => Color.TextColor};
    }
  }

  .signbody {
    margin: 0px 5px;
  }

  .signclass {
    a {
      text-decoration: none;
      color: ${({ Color }) => Color.TextColor && Color.TextColor};
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      /* identical to box height */

      .signitem {
        /* background-color: ${({ Color }) => Color.BBg && Color.BBg}; */
        padding: 10px 20px;
        border-radius: 8px;

        @media (max-width: 720px) {
          border: 1px solid ${({ Color }) => Color.BBg && Color.BBg};
          padding: 5px 20px;
        }

        /* @media (max-width: 414px) {
          border: 1px solid ${({ Color }) => Color.BBg && Color.BBg};
        } */

        &:hover {
          background-color: ${({ Color }) => Color.BBg && Color.BBg};
        }

        h4 {
          font-size: 14px;
        }
      }

      &:hover {
        color: ${({ Color }) => Color.PrimaryColor && Color.PrimaryColor};
      }

      @media (max-width: 720px) {
        color: ${({ Color }) => Color.BBg && Color.BBg};
        border: 1px solid ${({ Color }) => Color.BBg && Color.BBg};
      }

      @media (max-width: 414px) {
        color: ${({ Color }) => Color.BBg && Color.BBg};
        border: 1px solid ${({ Color }) => Color.BBg && Color.BBg};
      }
    }
  }

  .dashboardlinkbody {
    margin: 0px 10px;

    .dashboardlink {
      padding: 5px 0px;
      a {
        text-decoration: none;
        color: ${({ Color }) => Color.FedaColor && Color.FedaColor};

        .dashboardlinkitem {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0px 10px;
          color: ${({ Color }) => Color.FedaColor && Color.FedaColor};

          .dashboardlinkimage {
            display: flex;
            align-items: center;
            color: ${({ Color }) => Color.FedaColor && Color.FedaColor};

            @media (max-width: 414px) {
              color: ${({ Color }) => Color.FedaColor && Color.FedaColor};
              display: block;
            }
          }

          h4 {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            color: ${({ Color }) => Color.FedaColor && Color.FedaColor};

            @media (max-width: 720px) {
              display: none;
            }
          }
          @media (max-width: 720px) {
            padding: 10px 14px;
          }
        }
      }
      .active {
        font-style: normal;
        font-weight: 500;
        color: #000;
        border-bottom: 2px solid
          ${({ Color }) => Color.TextColor && Color.TextColor};
      }
    }

    @media (max-width: 414px) {
      margin: 0px 20px;
    }
  }

  .signlinkbody {
    .signlink {
      display: flex;
      align-items: center;

      .signlinkitemD {
        p {
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          color: ${({ Color }) => Color.TextColor && Color.TextColor};
        }
      }

      a {
        text-decoration: none;
        color: ${({ Color }) => Color.TextColor && Color.TextColor};
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        margin-left: 4px;
      }
    }
  }

  .signfootertextkbody {
    padding-top: 5px;
    .signfootertext {
      h4 {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        color: ${({ Color }) => Color.TextColor && Color.TextColor};
      }
    }
  }

  .secondfooteritem {
    display: flex;
    align-items: center;
    justify-content: center;

    .signfooterlinkbody {
      margin: 0px 8px;
      padding: 2px 8px;

      .signfooterlink {
        a {
          text-decoration: none;
          color: ${({ Color }) => Color.TextColor && Color.TextColor};

          .signfooterlinkitem {
            h4 {
              font-style: normal;
              font-weight: 300;
              font-size: 16px;
            }
          }
        }
      }
    }
  }

  .thirdfooteritem {
    .signfooterbody {
      .signfooter {
        a {
          text-decoration: none;
          color: ${({ Color }) => Color.TextColor && Color.TextColor};
          .signfooteritem {
            h4 {
              font-style: normal;
              font-weight: 300;
              font-size: 16px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1090px) {
    padding: ${({ navrouter, page }) =>
      navrouter ? "3px 60px" : page ? "5px 8px" : "0px 0px"};
    border: none;
    flex-direction: ${({ page }) => !page && "column"};
    margin-bottom: ${({ page }) => page && "1px"};
    box-shadow: "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)";

    .secondnavitem {
      display: ${({ page }) => !page && "none"};
    }
  }

  @media (max-width: 920px) {
    padding: ${({ navrouter, page }) =>
      navrouter ? "3px 60px" : page ? "5px 8px" : "0px 0px"};
    border: none;
    flex-direction: ${({ page }) => !page && "column"};
    margin-bottom: ${({ page }) => page && "1px"};
    box-shadow: "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)";

    .secondnavitem {
      display: ${({ page }) => !page && "none"};
    }
  }

  @media (max-width: 720px) {
    background-color: ${({ Color, page }) => page && Color.PrimaryColor};
    padding: ${({ navrouter, page }) =>
      navrouter ? "3px 60px" : page ? "5px 8px" : "0px 0px"};
    border: none;
    flex-direction: ${({ page }) => !page && "column"};
    margin-bottom: ${({ page }) => page && "1px"};
    box-shadow: "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)";

    .secondnavitem {
      display: none;
    }
  }

  @media (max-width: 414px) {
    background-color: ${({ Color }) =>
      Color.TertiaryColor && Color.TertiaryColor};
    flex-direction: column;
    padding: ${({ navrouter }) => (navrouter ? "3px 60px" : "0px 0px")};
    border: none;
    margin-bottom: ${({ page }) => page && "20px"};

    .secondnavitem {
      /* .searchbody { */
      display: none;
      /* } */
    }
  }
`;
