import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 30px;

  @media (max-width: 1500px) {
    width: 80%;
  }
  @media (max-width: 450px) {
    width: 90%;
  }
`;

export default Container;
