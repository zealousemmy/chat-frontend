import styled from "styled-components";

export const ManagedChannelStyles = styled.div`
  .channelbody {
    text-decoration: none;
    background-color: ${({ Color }) => Color.PrimaryColor};
    border-radius: 10px;
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    color:rgb(31, 41, 55) ;

    .channelfirstlayout {
      display: flex;
      align-items: center;

      .channelfirstlayoutimage {
        width: 87px;
        height: 67px;
        border-radius: 10px;

        @media (max-width: 414px) {
          width: 67px;
          height: 47px;
        }

        @media (max-width: 350px) {
          width: 57px;
          height: 37px;
        }

        @media (max-width: 300px) {
          width: 47px;
          height: 27px;
        }
      }

      .channelheadsection {
        margin-left: 12px;

        h3 {
          font-style: normal;
          font-weight: 600;
          font-size: 17px;

          @media (max-width: 414px) {
            font-size: 14px;
          }

          @media (max-width: 350px) {
            font-size: 13px;
          }

          @media (max-width: 300px) {
            font-size: 12px;
          }
        }

        .channelcontent {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 200px;
          margin-top: 10px;

          .channel-subscriber {
            display: flex;
            align-items: center;

            p {
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              margin-right: 5px;

              @media (max-width: 414px) {
                font-size: 12px;
              }

              @media (max-width: 350px) {
                font-size: 10px;
              }

              @media (max-width: 300px) {
                font-size: 9px;
              }
            }
          }

          .channel-post {
            display: flex;
            align-items: center;

            p {
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              margin-right: 5px;

              @media (max-width: 414px) {
                font-size: 12px;
              }

              @media (max-width: 350px) {
                font-size: 10px;
              }

              @media (max-width: 300px) {
                font-size: 9px;
              }
            }
          }

          @media (max-width: 414px) {
            width: 170px;
          }

          @media (max-width: 350px) {
            width: 150px;
          }

          @media (max-width: 300px) {
            width: 140px;
          }
        }
      }
    }

    /* .channel-notification {
      display: flex;
      align-items: center;
      justify-content: center;
    } */
  }
`;
