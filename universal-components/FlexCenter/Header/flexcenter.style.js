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
      p {
        color: ${({ Color }) => Color.FedaColor && Color.FedaColor}
        font-style: normal
        font-weight: 100;
        font-size: 20px;
      }

      .active {
        color: ${({ Color }) => Color.TextColor && Color.TextColor}
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        border-bottom: 2px solid ${({ Color }) => Color.BBg && Color.BBg};
      }
    }
  }
`;
