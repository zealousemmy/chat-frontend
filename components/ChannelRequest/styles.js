import styled from "styled-components";
import Container from "../../universal-components/Container";

export const ChannelInviteWrapper = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${Container} {
    @media (max-width: 700px) {
      width: 95%;
    }
    @media (max-width: 450px) {
      width: 100%;
    }
  }
`;
export const ChannelInviteHeader = styled.div``;
export const ChannelInviteContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
export const ChannelInviteCard = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  /* justify-content: space-between; */

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const ChannelInviteCard_Image = styled.div`
  height: 100%;
  width: 150px;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;

  img {
    object-fit: cover;
    object-position: center;
    margin: 10px;
    border-radius: 15px;

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ChannelInviteCard_Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  padding: 0 10px;

  p {
    font-weight: 600;
    display: flex;

    gap: 50px;
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

export const ChannelInviteCard_Button = styled.div`
  display: flex;
  flex-direction: column;

  button {
    width: 100%;
    padding: 15px;
    text-align: center;
    border: 0;
    cursor: pointer;
  }

  .delete {
    color: #eb0000;
    border-radius: 0 10px 0px 0;
    background-color: #ff9d9d;

    @media (max-width: 600px) {
      width: 100%;
      border-radius: 0;
    }
  }
  .accept {
    border-radius: 0 0 10px 0;
    color: #fff;
    background-color: #02ff67;

    @media (max-width: 600px) {
      width: 100%;
      border-radius: 0 0 10px 10px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
