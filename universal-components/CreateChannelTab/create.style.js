import styled from "styled-components";

export const CreateChannel = styled.div`
  background-color: ${({ Color }) => Color.PrimaryColor && Color.PrimaryColor};
  border-radius: 10px;
  margin: 20px 0px;

  .createchannelheader {
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: ${({ Color }) => Color.TextColor && Color.TextColor};
    }
  }

  .createchannelbody {
    padding: 20px;

    button {
      background-color: ${({ Color }) => Color.BBg && Color.BBg};
      color: ${({ Color }) => Color.PrimaryColor && Color.PrimaryColor};
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      padding: 14px 12px;
      border: none;
      outline: none;
      box-shadow: 0px 7px 20px rgba(31, 41, 55, 0.1);
      border-radius: 5px;
    }
  }
`;
