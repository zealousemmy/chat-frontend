import styled from "styled-components";

export const SubNavStyle = styled.div`
  background-color: ${({ Color }) => Color.TertiaryColor};
  position: absolute;
  top: 67px;
  padding: 30px 0px;
  border-radius: 5px;

  .linkbody {
    padding: 5px 25px;

    a {
      color: ${({ Color }) => Color.TextColor};
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
    }
    .active {
      background-color: ${({ Color }) => Color.TextColor};
      color: ${({ Color }) => Color.PrimaryColor};
    }
  }
`;
