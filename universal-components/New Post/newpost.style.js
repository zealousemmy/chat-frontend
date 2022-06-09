import styled from "styled-components";

export const NewPostStyles = styled.div`
  background-color: ${({ Color }) =>
    Color.TertiaryColor && Color.TertiaryColor};
  margin: 20px 0px;
  border-radius: 8px;
  border: 1px solid ${({ Color }) => Color.BBg};

  .newpostheader {
    display: flex;
    align-items: center;
    padding: 12px 10px;
    /* border-bottom: 1px solid ${({ Color }) => Color.TextColor}; */
    .newpostheaderimage {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .newpostheadertext {
      background-color: ${({ Color }) => Color.PrimaryColor};
      padding: 12px 10px;
      border-radius: 8px;
      width: 95%;
      margin: 0px 12px;
      display: flex;
      justify-content: center;
    }
  }

  .newpostbody {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px 10px 60px;

    .newpostbodycontent {
      display: flex;
      align-items: center;
      /* width: 450px; */

      .newpostbodycontentimage {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        margin-right: 1px;
      }

      .newpostbodycontenttext {
      }
    }
  }
`;
