import styled from "styled-components";

export const DivStyles = styled.div`
  width: ${({ width }) => width};

  @media (max-width: 810px) {
    width: 80%;
  }

  @media (max-width: 710px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    width: 98%;
  }
`;
