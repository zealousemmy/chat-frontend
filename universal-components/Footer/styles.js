import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 2rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  width: 40%;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  text-transform: capitalize;

  a {
    text-decoration: none;
    margin: 5px 10px;
    color: #555;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease-in;
    font-size: 0.9rem;

    :hover {
      border-bottom: 1px solid;
    }
  }
`;
export const FooterCopyRight = styled.h1`
  font-size: 1.2rem;
`;
