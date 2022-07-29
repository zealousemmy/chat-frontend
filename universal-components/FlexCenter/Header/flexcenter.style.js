import styled from "styled-components";

export const FlexCenterStyles = styled.div`
  margin-bottom: 25px;

  .landingpagecenter {
    width: 100%;
    background-color: ${({ Color }) =>
      Color.TertiaryColor && Color.TertiaryColor};
    display: flex;
    align-items: center;
    /* justify-content: space-between; */

    div {
      width: 33.3%;
      text-align: center;
      padding: 10px 0px;
      cursor: pointer;
      p {
        color: ${({ Color }) => Color.FedaColor && Color.FedaColor}
        font-style: normal
        font-weight: 100;
        font-size: 20px;

        @media (max-width: 920px) {
          font-size: 15px;
        }

        @media (max-width: 920px) {
          font-size: 16px;
        }

        @media (max-width: 720px) {
          font-size: 15px;
        }

        @media (max-width: 414px) {
          font-size: 14px;
        }

        @media (max-width: 290px) {
          font-size: 10px;
        }
      }

      
    }
    .active {
      color: ${({ Color }) => Color.TextColor && Color.TextColor};
      font-style: normal;
      font-weight: 600;
      border-bottom: 2px solid ${({ Color }) => Color.BBg && Color.BBg};
    }
  }

  @media (max-width: 500px) {
    margin: 10px;
  }
`;
