import styled from "styled-components";

export const SubNavStyle = styled.div`
  background-color: ${({ Color }) => Color.TertiaryColor};
  position: absolute;
  top: 60px;
  padding: 40px 0px;
  border-radius: 5px;

  .linkbody {
    a {
      color: ${({ Color }) => Color.TextColor};
      font-style: normal;
      font-weight: 500;
      font-size: 16px;

      div {
        padding: 5px 50px 5px 10px;
      }
    }
    .active {
      background-color: ${({ Color }) => Color.TextColor};
      color: ${({ Color }) => Color.TertiaryColor};
    }
  }
`;
