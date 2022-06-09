import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 30px;
`;

export const FooterLinks = styled.div`
  display: flex;
  width: 60%;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  text-transform: capitalize;

  a {
    text-decoration: none;
    margin: 5px 15px;
    color: #555;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease-in;

    :hover {
      border-bottom: 1px solid;
    }
  }
`;
export const FooterCopyRight = styled.h1`
  font-size: 2rem;
`;
