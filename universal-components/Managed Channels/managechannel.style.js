import styled from "styled-components";

export const ManagedChannelStyles = styled.div`
  .channelbody {
    background-color: ${({ Color }) => Color.PrimaryColor};
    border-radius: 10px;
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;

    .channelfirstlayout {
      display: flex;
      align-items: center;

      .channelfirstlayoutimage {
        width: 87px;
        height: 67px;
        border-radius: 10px;
      }

      .channelheadsection {
        margin-left: 12px;

        h2 {
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
        }

        .channelcontent {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 230px;
          margin-top: 10px;

          .channel-subscriber {
            display: flex;
            align-items: center;

            p {
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              margin-right: 5px;
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
            }
          }
        }
      }
    }

    .channel-notification {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
