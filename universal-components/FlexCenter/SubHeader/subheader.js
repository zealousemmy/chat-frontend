import styled from "styled-components";

export const SubHeaderStyles = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  hr {
    width: 82%;
  }

  .optionbody {
    display: flex;
    align-items: center;
    margin-left: 10px;

    /* select {
      border: none;
      outline: none;
      background-color: transparent;
      font-weight: bolder;
      font-size: 16px;

      option {
        border: none;
        background-color: transparent;
        font-weight: 500px;
      }
    } */

    .dropdownbody {
      cursor: pointer;
      margin-left: 5px;

      .dropdownheader {
        display: flex;
        align-items: center;
        h3 {
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
          h3 {
            color: ${({ Color }) => Color.PrimaryColor};
          }
        }
      }
    }
  }
`;
