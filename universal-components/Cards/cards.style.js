import styled from "styled-components";

export const CardStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0px;
`;

export const CardBody = styled.div`
  position: relative;
  width: 199px;
  height: 205px;
  background-image: url(${({ bg }) => bg.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  margin: 10px 6px;

  .cardbody {
    position: absolute;
    bottom: 0px;
    width: 199px;
    height: 159px;
    background-color: ${({ Color }) => Color.PrimaryColor};
    border-radius: 0px 0px 8px 8px;
    padding: 10px;
    padding-top: 20px;

    h3 {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: ${({ Color }) => Color.TextColor};
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      padding: 10px 0px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: ${({ Color }) => Color.FedaColor};
    }

    button {
      border: none;
      outline: none;
      border-radius: 8px;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      padding: 10px 16px;
      background-color: ${({ Color }) => Color.BBg};
    }
  }
`;
