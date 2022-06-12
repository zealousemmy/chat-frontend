import styled from "styled-components";
import Container from "../../../universal-components/Container";

export const EventsWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;

  ${Container} {
    gap: 70px;
    @media (max-width: 700px) {
      width: 95%;
    }
    @media (max-width: 450px) {
      width: 100%;
    }
  }
`;
export const EventsHeader = styled.div`
  h2 {
    text-transform: capitalize;
    margin-bottom: 10px;
    font-weight: 600;
  }

  button {
    width: 200px;
    background-color: #0096ff;
    color: #fff;
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
    border: 1px solid #0096ff;
    border-radius: 10px;
    font-weight: 700;
    text-transform: capitalize;
  }
`;

export const EventsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
export const EventsCard = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const EventsCard_Image = styled.div`
  height: 100%;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    object-position: center;
    border-radius: 15px;
    padding: 10px 0;

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const EventsCard_Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  gap: 10px;

  p {
    font-weight: 600;
    display: flex;

    span {
      font-weight: 300;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 5px;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const EventsCard_Button = styled.div`
  height: 80px;
  width: 150px;
  button {
    background-color: #ff9d9d;
    color: #eb0000;
    width: 100%;
    height: 100%;
    text-align: center;
    border: 0;
    cursor: pointer;
    border-radius: 0 10px 10px 0;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
