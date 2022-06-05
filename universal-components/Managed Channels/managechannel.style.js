import styled from "styled-components";

export const ManagedChannelStyles = styled.div`
  .channelbody {
    background-color: ${({ Color }) => Color.PrimaryColor};
    border-radius: 10px;
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .channelfirstlayout {
      display: flex;
      align-items: center;

      .channelheadsection {
        margin-left: 12px;
        .channelcontent {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 250px;
          margin-top: 10px;

          .channel-subscriber {
            display: flex;
            align-items: center;
          }

          .channel-post {
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
`;
