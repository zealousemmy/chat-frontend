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
      padding: 10px 20px 5px 20px;
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

          .profile-image {
            border-radius: 50%;
          }
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

      .iconclass {
        .icons {
          color: ${({ Color }) => Color.TertiaryColor && Color.BBg};
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
          display: block;
          line-height: 2;
          max-height: 11rem;
          overflow: hidden !important;
          text-overflow: ellipsis;
          white-space: wrap;
          display: -webkit-box;
          -webkit-line-clamp: 7;
          -webkit-box-orient: vertical;
          line-clamp: 7;
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
      width: 96%;
      /* height: 329px; */
      margin: 10px 0px;
      /* border: 1px solid black; */

      .itemlayout3 {
        width: 100%;
      }

      @media (max-width: 414px) {
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
          padding: 5px 0px;
          margin-right: 12px;

          .itemlayout401 {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }

          .itemlayout402 {
            margin-left: 5px;
            p {
              font-size: 13px;
              font-weight: 400;
            }
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
            justify-content: center;
            cursor: pointer;
          }

          .itemlayout4112 {
            margin-left: 5px;
            p {
              font-size: 13px;
              font-weight: 400;
            }
          }
        }
      }
    }

    .see-more-comments {
      width: 100%;
      text-align: center;
      padding-bottom: 20px;

      button {
        border: none;
        outline: none;
        border-radius: 5px;
        background-color: ${({ Color }) => Color.BBg};
        color: ${({ Color }) => Color.PrimaryColor};
        padding: 7px 12px;
        box-shadow: 0px 7px 20px rgba(31, 41, 55, 0.2);
      }
    }
  }

  @media (max-width: 500px) {
    margin: 10px;
  }
`;
