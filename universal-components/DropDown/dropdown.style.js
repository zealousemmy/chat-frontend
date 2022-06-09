import styled from "styled-components";

export const DropDownStyles = styled.div`
  cursor: pointer;

  .dropdownheader {
    display: flex;
    align-items: center;
    p {
      color: #000;
      margin-right: 4px;
    }
  }
  .dropdownitembody {
    position: absolute;
    background-color: ${({ Color }) => Color.BBg};
    padding: 10px 12px;
    border-radius: 4px;

    .dropdownitem {
      padding: 5px 0px;
      h4 {
        color: ${({ Color }) => Color.PrimaryColor};
      }
    }
  }
`;
