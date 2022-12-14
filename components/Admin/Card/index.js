import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 30%;
  padding: 10px;

  box-shadow: 0.5px 0.5px 4px #b5b5b5;
  border-radius: 13px;
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 20px;

  h2 {
    border-bottom: 3px solid #0096ff;
  }

  @media (max-width: 600px) {
    width: 45%;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;
const Card = ({ label, figure }) => {
  return (
    <CardContainer>
      <p>{label}</p>
      <h2>{figure}</h2>
    </CardContainer>
  );
};

export default Card;
