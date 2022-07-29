import styled from "styled-components";

export const NotificationStyle = styled.div`
  .notification {
    width: 30px;
    height: 30px;

    @media (max-width: 414px) {
      width: 24px;
      height: 24px;
    }

    @media (max-width: 350px) {
      width: 20px;
      height: 20px;
    }

    @media (max-width: 300px) {
      width: 18px;
      height: 18px;
    }
  }

  .circle {
    position: relative;
    top: -1rem;
    left: -0.8rem;
    color: red;
    width: 10px;
    height: 10px;

    @media (max-width: 414px) {
      top: -0.8rem;
      left: -0.7rem;
      width: 8px;
      height: 8px;
    }

    @media (max-width: 350px) {
      top: -0.6rem;
      left: -0.6rem;
      width: 6px;
      height: 6px;
    }

    @media (max-width: 300px) {
      top: -0.6rem;
      left: -0.6rem;
      width: 5px;
      height: 5px;
    }
  }
`;
