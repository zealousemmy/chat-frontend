import styled from "styled-components";

export const FlexRightStyle = styled.div`
  .firstflexleft {
    margin-bottom: 20px;
  }

  .firstflexleftbody {
    padding-bottom: 20px;
    width: 190px;
    border-radius: 8px;
    background-color: ${({ Color }) =>
      Color.PrimaryColor && Color.PrimaryColor};

    .firstflexleftclass {
      text-align: center;
      padding: 10px 12px;
      /* border-bottom: 1px solid
        ${({ Color }) => Color.SecondaryColor && Color.SecondaryColor}; */

      h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
      }

      h4 {
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
      }
    }

    .firstflexleftclasssecond {
      /* padding: 10px; */

      .channelflextleftclass {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: ${({ Color }) => Color.ListColor && Color.ListColor};
        padding: 8px 5px;
        border-bottom: 1px solid
          ${({ Color }) => Color.SecondaryColor && Color.SecondaryColor};

        h4 {
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
        }

        .channelflexleftitem {
          display: flex;
          align-items: center;
        }
      }
    }
  }

  .flexrightfooter {
    text-align: center;

    .flexrightlinks {
      width: 190px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .flexrightlink {
        a {
          text-decoration: none;
          color: ${({ Color }) => Color.FedaColor && Color.FedaColor};
          font-style: normal;
          font-weight: 400;
          font-size: 9px;
          margin: 0px 3px;
        }
      }
    }

    .flexrightfooterheader {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
    }
  }

  .footeritem {
    width: 100%;
    margin: 20px 0px;
    text-align: center;
    button {
      border: none;
      outline: none;
      border-radius: 5px;
      background-color: ${({ Color }) => Color.BBg};
      color: ${({ Color }) => Color.PrimaryColor};
      padding: 10px 12px;
      box-shadow: 0px 7px 20px rgba(31, 41, 55, 0.2);
    }
  }
`;
