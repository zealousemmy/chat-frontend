import styled from "styled-components";

export const FlexCenterBodyStyles = styled.div`
  /* margin: 20px 0px; */
  .layoutbody {
    background-color: ${({ Color }) =>
      Color.PrimaryColor && Color.PrimaryColor};
    margin: 20px 0px;
    border-radius: 8px;
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.212);

    .layout {
      padding: 10px 10px 5px 10px;
    }

    .namelayout {
      display: flex;
      justify-content: space-between;
      padding: 10px 0px;

      .itemlayout {
        display: flex;

        .itemlayout1 {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .itemlayout11 {
          padding-left: 10px;

          h2 {
            color: ${({ Color }) => Color.MainTextColor && Color.MainTextColor};
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
          }

          .itemlayout111 {
            display: flex;

            div {
              margin: 4px 0px;
              margin-right: 8px;
              padding: 5px 12px;
              border-radius: 20px;

              background-color: ${({ Color }) =>
                Color.SubSecondaryColor && Color.SubSecondaryColor};

              p {
                font-style: normal;
                font-weight: 400;
                font-size: 10px;
              }
            }
          }
        }
      }

      .itemlayouttime {
        h3 {
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          color: ${({ Color }) => Color.FedaColor && Color.FedaColor};
        }
      }
    }

    .namelayout2 {
      .itemlayout2 {
        p {
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          margin: 5px 0px;
          color: ${({ Color }) => Color.MainTextColor && Color.MainTextColor};
          /* border: 1px solid black; */
        }
      }
      .itemlayout21 {
        margin-bottom: 20px;
        a {
          text-decoration: none;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          color: ${({ Color }) => Color.LinkColor && Color.LinkColor};
        }
      }
    }

    .namelayout3 {
      width: 779px;
      height: 329px;
      margin: 10px 0px;
      /* border: 1px solid black; */

      .itemlayout3 {
        width: 100%;
      }
    }

    .namelayout4 {
      padding: 12px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .itemlayout4 {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .itemlayout40 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          /* margin: 0px 5px; */
          padding: 5px 0px;
          margin-right: 12px;

          .itemlayout401 {
            display: flex;
            align-items: center;
            margin: 0px 3px;
            padding: 5px 0px;
          }
        }
      }

      .itemlayout41 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0px 5px;
        padding: 3px 5px;

        .itemlayout411 {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .itemlayout4111 {
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
`;
