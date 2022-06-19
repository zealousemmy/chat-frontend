import styled from "styled-components";

export const CardStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5px 0px;
`;

export const CardBody = styled.div`
  position: relative;
  width: 188px;
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
    padding-top: 50px;

    h4 {
      font-style: normal;
      font-weight: 800;
      font-size: 15px;
      color: ${({ Color }) => Color.TextColor};
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      padding: 10px 0px;
      display: block;
      line-height: 1;
      max-height: 2rem;
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
      padding: 8px 30px;
      margin: 5px 0px;
      background-color: ${({ Color }) => Color.BBg};
      color: ${({ Color }) => Color.PrimaryColor};
    }
  }

  @media (max-width: 500px) {
    width: 200px;
    height: 205px;
  }

  @media (max-width: 420px) {
    width: 180px;
    height: 205px;
  }
  @media (max-width: 400px) {
    width: 230px;
    height: 225px;
  }
`;
