import styled from "styled-components";

export const NavDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ Color, navroter }) =>
    navroter ? Color.PrimaryColor : Color.TertiaryColor};
  padding: ${({ navroter }) => (navroter ? "3px 60px" : "8px 60px")};

  .thirdnavitem {
    display: flex;
    align-items: center;
  }

  .logobody {
    display: flex;
    align-items: center;

    .navlogo {
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
    margin: 0px 10px;
  }

  .signclass {
    a {
      text-decoration: none;
      color: ${({ Color }) => Color.PrimaryColor && Color.PrimaryColor};
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      /* identical to box height */

      .signitem {
        background-color: ${({ Color }) => Color.BBg && Color.BBg};
        padding: 10px 30px;
        border-radius: 8px;

        h4 {
          font-size: 14px;
        }
      }
    }
  }

  .dashboardlinkbody {
    margin: 0px 10px;

    .dashboardlink {
      a {
        text-decoration: none;
        color: ${({ Color }) => Color.FedaColor && Color.FedaColor};

        .dashboardlinkitem {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: ${({ Color }) => Color.FedaColor && Color.FedaColor};

          .dashboardlinkimage {
            display: flex;
            align-items: center;
          }

          h4 {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
          }
        }
      }
      .active {
        font-style: normal;
        font-weight: 500;
        color: ${({ Color }) => Color.TextColor && Color.TextColor};
        border: 1px solid ${({ Color }) => Color.TextColor && Color.TextColor};
      }
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
`;
