import styled from "styled-components";

export const SearchDiv = styled.div`
  width: 413px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  padding: 5px 12px;
  border-radius: 12px;
  border: none;
  outline: none;
  background-color: ${({ Color }) => Color.PrimaryColor && Color.PrimaryColor};

  input {
    outline: none;
    border: none;
    width: 96%;
    font-size: 16px;
    padding: 4px 10px;
    margin: 0px 5px;
    background-color: transparent;
  }
`;
