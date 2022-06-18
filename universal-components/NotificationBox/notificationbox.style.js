import styled from "styled-components";

export const NotificationStyles = styled.div`
  background-color: ${({ Color }) => Color.PrimaryColor};
  color: ${({ Color }) => Color.TextColor};
  border-radius: 9px;

  .notification-header {
    text-align: center;
    padding: 15px 0px;
    border-bottom: 1px solid ${({ Color }) => Color.TextColor};
  }

  .notification-all {
    width: 100%;
    padding: 20px 0px;
  }

  .notification {
    width: 100%;

    .notification-body {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0px;
      border-bottom: 1px solid ${({ Color }) => Color.TextColor};

      /* .notification-image {
        background-color: #1f2937;
        width: 4rem;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;

        .notified-image {
          color: ${({ Color }) => Color.PrimaryColor};
          width: 2rem;
          height: 2rem;
        }
      } */

      .notification-text {
        width: 70%;
        padding: 0px 15px;

        p {
          font-weight: 400px;
          font-size: 12px;
          display: block;
          line-height: 2;
          max-height: 11rem;
          overflow: hidden !important;
          text-overflow: ellipsis;
          white-space: wrap;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          line-clamp: 2;
        }
      }

      .notification_interval {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 20px;

        p {
          font-size: 12px;
          font-weight: 400;
        }

        .icons {
          display: flex;
          align-items: center;

          .icon-body {
            padding: 1px;
            .icon-item {
              width: 6px;
              color: ${({ Color }) => Color.BBg};
            }
          }
        }
      }
    }
  }
  /* } */
`;

export const ImageContainer = styled.div`
  background-color: ${({ model }) => (model ? "#1f2937" : "red")};
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .notified-image {
    color: ${({ Color }) => Color.PrimaryColor};
    width: 2rem;
    height: 2rem;
  }
`;
