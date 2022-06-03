import styled from "styled-components";

export const FlexLeftStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .firstflexleft {
    margin-bottom: 20px;
  }

  .firstflexleftbody {
    width: 186px;
    /* width: 240px; */
    border-radius: 12px;
    background-color: ${({ Color }) =>
      Color.PrimaryColor && Color.PrimaryColor};

    .firstflexleftclass {
      text-align: center;
      padding: 10px 12px;
      border-bottom: 1px solid
        ${({ Color }) => Color.SecondaryColor && Color.SecondaryColor};

      .firstflexleftitem {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
      }
    }

    .firstflexleftclasssecond {
      padding: 10px;

      .postflextleftclass {
        padding: 8px 0px;

        .postflexleftitem {
          font-style: normal;
          font-weight: 500;
          font-size: 10px;
        }
      }
    }
  }

  .secondflexleft {
    margin-bottom: 20px;
  }

  .secondflexleftclasssubtext {
    text-align: center;
    padding: 12px 0px;
    .secondflexleftitemsubtext {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: ${({ Color }) => Color.FedaColor && Color.FedaColor};
    }
  }

  .secondflexleftbody {
    width: 186px;
    border-radius: 8px;
    background-color: ${({ Color }) =>
      Color.PrimaryColor && Color.PrimaryColor};

    .secondflexleftclass {
      text-align: center;
      padding: 10px 12px;
      border-bottom: 1px solid
        ${({ Color }) => Color.SecondaryColor && Color.SecondaryColor};

      .secondflexleftitem {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
      }
    }

    .secondflexleftclassimage {
      text-align: center;
    }

    .secondflexleftitemsecond {
      width: 188px;
      height: 103px;
      /* border: 1px solid black; */
      .image {
        width: 100% !important;
        height: 123px;
      }
    }

    .secondflexleftclassthird {
      text-align: center;
      padding: 15px 10px;

      .secondflexleftitemthird {
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
      }
    }
  }

  .profileclasssecond {
    padding: 10px;
  }

  .profile {
    margin-bottom: 20px;
  }

  .profiletbody {
    width: 186px;
    border-radius: 8px;
    background-color: ${({ Color }) =>
      Color.PrimaryColor && Color.PrimaryColor};

    .profileflextleftclass {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0px;

      .profileflexleftitem {
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
      }
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
      }
    }
  }
`;

// "postflextleftclass",
//             classitem: "postflexleftitem",
