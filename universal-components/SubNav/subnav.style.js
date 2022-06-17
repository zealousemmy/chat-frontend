import styled from "styled-components";

export const SubNavStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ Color }) => Color.TertiaryColor};
  position: relative;
  top: -2.5rem;
  padding: 40px 0px;
  border-radius: 0px 0px 5px 5px;

  .linkbody {
    a {
      color: ${({ Color }) => Color.TextColor};
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      text-decoration: none;

      div {
        padding: 5px 42px 5px 10px;
      }
    }
    .active {
      background-color: ${({ Color }) => Color.TextColor};
      color: ${({ Color }) => Color.TertiaryColor};
    }
  }
`;
