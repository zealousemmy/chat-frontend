import styled from "styled-components";

export const SubHeaderStyles = styled.div`
  display: flex;
  align-items: center;

  hr {
    width: 82%;
  }

  .optionbody {
    display: flex;
    align-items: center;
    margin-left: 20px;

    select {
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
    }
  }
`;
