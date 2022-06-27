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
  position: ${({ signbottom }) => (signbottom ? "absolute" : "relative")};
  bottom: ${({ signbottom }) => signbottom && "0px"};

  .firstnavitem {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1090px) {
      padding: 10px;
      width: ${({ page }) => !page && "100%"};
    }

    @media (max-width: 414px) {
      background-color: ${({ Color, navrouter }) =>
        navrouter && Color.TertiaryColor};
    }
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

  .thirdnavitem {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1090px) {
      justify-content: ${({ page }) => (page ? "center" : "space-between")};
      width: ${({ page }) => !page && "100%"};
      padding-top: ${({ navrouter }) => !navrouter && "15px"};
      padding: ${({ page }) => page && "10px 0px"};
      background-color: ${({ Color, page, navrouter }) =>
        !page && !navrouter && Color.PrimaryColor};
    }

    @media (max-width: 414px) {
      width: ${({ page }) => !page && "100%"};
      padding-top: ${({ navrouter }) => !navrouter && "15px"};
      padding: ${({ page }) => page && "10px"};
      background-color: ${({ Color, navrouter, page }) =>
        !navrouter && !page && Color.PrimaryColor};
      /* box-shadow: ${({ page }) =>
        page &&
        "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"}; */
    }

    @media (max-width: 290px) {
      width: ${({ page }) => !page && "100%"};
      padding-top: ${({ navrouter }) => !navrouter && "15px"};
      padding: ${({ page }) => page && "10px"};
      background-color: ${({ Color, navrouter, page }) =>
        !navrouter && !page && Color.PrimaryColor};
      /* box-shadow: ${({ page }) =>
        page &&
        "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"}; */
    }
  }

  .signbodyicon {
    display: none;

    .signclassicon {
      .signitemicon {
        color: ${({ Color }) => Color && Color.TextColor};
      }
    }

    @media (max-width: 414px) {
      display: block;
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
        }

        @media (max-width: 414px) {
          color: ${({ Color }) => Color.BBg && Color.BBg};
        }
      }
    }
    @media (max-width: 414px) {
      display: none;
    }
  }

  .dashboardlinkbody {
    margin: 0px 10px;

    .dashboardlink {
      a {
        text-decoration: none;

        .dashboardlinkitem {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3px 10px;
          color: ${({ Color }) => Color.FedaColor && Color.FedaColor};

          .dashboardlinkimage {
            display: flex;
            justify-content: center;
            align-items: center;

            .dashboardlinkimageitem {
              width: 20px;
              height: 20px;

              @media (max-width: 720px) {
                margin: 5px 0px;
              }
            }
          }

          h4 {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;

            @media (max-width: 720px) {
              display: none;
            }
          }

          @media (max-width: 300px) {
            padding: 3px 0px;
          }
        }
        .active {
          font-style: normal;
          font-weight: 500;
          color: #000;
          border-bottom: 2px solid #000;
        }
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

          @media (max-width: 750px) {
            font-size: 15px;
          }

          @media (max-width: 580px) {
            font-size: 13px;
          }

          @media (max-width: 470px) {
            font-size: 12px;
          }

          @media (max-width: 430px) {
            font-size: 10px;
          }

          @media (max-width: 350px) {
            font-size: 9px;
          }

          @media (max-width: 324px) {
            font-size: 7px;
          }
        }
      }

      a {
        text-decoration: none;
        color: ${({ Color }) => Color.TextColor && Color.TextColor};
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        margin-left: 4px;

        @media (max-width: 580px) {
          font-size: 13px;
        }

        @media (max-width: 500px) {
          font-size: 11px;
        }

        @media (max-width: 470px) {
          font-size: 10px;
        }

        @media (max-width: 324px) {
          font-size: 8px;
        }
      }
    }
  }

  .firstfooteritem {
    .signfootertextkbody {
      .signfootertext {
        h4 {
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          color: ${({ Color }) => Color.TextColor && Color.TextColor};

          @media (max-width: 720px) {
            font-size: 14px;
          }

          @media (max-width: 500px) {
            font-size: 12px;
          }

          @media (max-width: 414px) {
            font-size: 10px;
          }
        }
      }
    }
    @media (max-width: 720px) {
      padding: 0;
    }
  }

  .secondfooteritem {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    flex-wrap: wrap;

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

              @media (max-width: 500px) {
                font-size: 14px;
                padding: 0px 4px;
              }

              @media (max-width: 414px) {
                font-size: 12px;
              }
            }
          }
        }
      }

      @media (max-width: 500px) {
        margin: 0px 0px;
        padding: 2px 0px;
      }
    }

    @media (max-width: 720px) {
      width: 400px;
      flex-wrap: wrap;
    }

    @media (max-width: 500px) {
      width: 280px;
      flex-wrap: wrap;
    }

    @media (max-width: 414px) {
      width: 200px;
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

              @media (max-width: 500px) {
                font-size: 14px;
              }

              @media (max-width: 414px) {
                font-size: 12px;
              }
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
    flex-direction: ${({ page, navrouter }) => !page && !navrouter && "column"};
    margin-bottom: ${({ page }) => page && "1px"};
    box-shadow: "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)";
    align-items: ${({ signbottom }) => signbottom && "baseline"};

    .secondnavitem {
      display: ${({ page }) => !page && "none"};
    }
  }

  @media (max-width: 920px) {
    padding: ${({ navrouter, page }) =>
      navrouter ? "3px 60px" : page ? "5px 8px" : "0px 0px"};
    border: none;
    flex-direction: ${({ page, navrouter }) => !page && !navrouter && "column"};
    margin-bottom: ${({ page }) => page && "1px"};
    box-shadow: "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)";
    align-items: ${({ signbottom }) => signbottom && "baseline"};

    .secondnavitem {
      display: ${({ page }) => !page && "none"};
    }
  }

  @media (max-width: 720px) {
    background-color: ${({ Color, page }) => page && Color.PrimaryColor};
    padding: ${({ navrouter, page }) =>
      navrouter ? "0px 10px" : page ? "5px 8px" : "0px 0px"};
    border: none;
    flex-direction: ${({ page, navrouter }) => !page && !navrouter && "column"};
    margin-bottom: ${({ page }) => page && "1px"};
    box-shadow: "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)";
    align-items: ${({ signbottom }) => signbottom && "baseline"};

    .secondnavitem {
      display: none;
    }
  }

  @media (max-width: 414px) {
    background-color: ${({ Color, page, navrouter }) =>
      page ? Color.TertiaryColor : navrouter && Color.PrimaryColor};
    padding: 10px;
    flex-direction: ${({ navrouter, page }) => !navrouter && !page && "column"};
    padding: ${({ navrouter, page }) =>
      navrouter ? "0px 10px" : page ? "0px 20px" : "0px 0px"};
    border: none;
    border-bottom: ${({ Color, page }) => page && `1px solid ${Color.BBg}`};
    margin-bottom: ${({ page }) => page && "2px"};
    align-items: ${({ signbottom }) => signbottom && "baseline"};
    position: ${({ signbottom }) => signbottom && "unset"};
    bottom: ${({ signbottom }) => signbottom && "unset"};

    .secondnavitem {
      display: none;
    }
  }
`;

export const NavLinkStyles = styled.div`
  display: ${({ select }) => select === "mobile-select" && "none"};

  @media (max-width: 765px) {
    display: ${({ select }) => select === "mobile-select" && "block"};
  }
`;

export const DropDownButton = styled.div`
  margin: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  .dashboardbutton_link {
    border: none;
    outline: none;
    background-color: transparent;
    color: ${({ Color }) => Color.FedaColor && Color.FedaColor};
    .dashboardbutton_linkitem {
      padding: 3px 10px;

      h4 {
        font-style: normal;
        font-weight: 400;

        @media (max-width: 720px) {
          display: none;
        }
      }

      .dashboardbutton_linkimage {
        width: 18px;
        height: 18px;

        @media (max-width: 250px) {
          width: 15px;
          height: 15px;
        }
      }

      /* @media (max-width: 500px) {
        display: ${({ sidebar }) => sidebar && "flex"};
      } */

      @media (max-width: 300px) {
        padding: 3px 0px;
      }
    }
  }

  @media (max-width: 720px) {
    /* display: ${({ sidebar }) => sidebar && "flex"}; */
    /* padding: 3px 5px 6px 5px; */
  }
`;
