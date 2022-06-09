import styled from "styled-components";
import Container from "../../universal-components/Container";

export const TermsConditionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${Container} {
    width: 45%;
    gap: 10px;

    .terms__content {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 30px;
      background: #ffffff;
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      p {
        display: flex;
        gap: 20px;
        width: 100%;
        align-items: flex-start;
        justify-content: flex-start;

        span {
          display: flex;
          line-height: 1.3;
          :first-of-type {
            ::after {
              content: ".";
            }
          }
        }
      }
    }

    @media (max-width: 1500px) {
      width: 70%;
    }

    @media (max-width: 950px) {
      width: 90%;
    }
  }
`;
