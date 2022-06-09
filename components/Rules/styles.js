import styled from "styled-components";
import Container from "../../universal-components/Container";

export const RulesWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${Container} {
    gap: 100px;
    display: flex;
    margin: 50px auto;
  }
`;

export const RulesWrapperHeader = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  flex-direction: column;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

export const RulesWrapperHeader__top = styled.div`
  width: 100%;
  display: flex;

  input {
    padding: 1rem;
    width: 100%;
    outline: 0;
    border: 0;
  }
`;
export const RulesWrapperHeader__bottom = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid;
  padding: 1rem;

  button {
    padding: 15px;
    border: 2px solid;
    border-radius: 10px;
    width: 200px;
    cursor: pointer;
    background-color: #0096ff;
    color: #fff;
  }
`;

export const RulesWrapperContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;
