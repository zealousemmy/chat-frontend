import styled from "styled-components";

export const CardStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 0px;
`;

export const CardBody = styled.div`
  position: relative;
  width: 230px;
  height: 205px;
  background-image: ${({ c1, c2, c3, c4 }) => `linear-gradient(
    to bottom left,
    ${c1}, ${c2}, ${c3}, ${c4}
  )`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;

  margin: 10px 6px;

  .cardbody {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 159px;
    background-color: ${({ Color }) => Color.PrimaryColor};
    border-radius: 0px 0px 8px 8px;
    padding: 10px;
    padding-top: 40px;

    h4 {
      font-style: normal;
      font-weight: 800;
      font-size: 15px;
      color: ${({ Color }) => Color.TextColor};
    }

    p {
      height: 30px;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      margin: 4px 0px;
      /* padding: 10px 0px; */
      display: block;
      line-height: 1;
      max-height: 3rem;
      overflow: hidden !important;
      text-overflow: ellipsis;
      white-space: wrap;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-clamp: 2;
      color: ${({ Color }) => Color.FedaColor};
    }

    button {
      border: none;
      outline: none;
      border-radius: 4px;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      padding: 10px 30px;
      margin: 10px 0px;
      background-color: ${({ Color }) => Color.BBg};
      color: ${({ Color }) => Color.PrimaryColor};
    }
  }

  @media (max-width: 855px) {
    width: 46%;
    height: 205px;
  }

  @media (max-width: 764px) {
    width: 30%;
    height: 205px;
  }

  @media (max-width: 670px) {
    width: 44%;
    height: 205px;
  }

  @media (max-width: 500px) {
    width: 44%;
    height: 205px;
  }

  @media (max-width: 420px) {
    width: 43%;
    height: 205px;
  }
  @media (max-width: 380px) {
    width: 95%;
    height: 225px;
  }
`;
