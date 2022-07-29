import styled from "styled-components";
import Container from "../../../universal-components/Container";

export const EmailWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  ${Container} {
    width: 100%;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

export const EmailHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  h3 {
    text-transform: capitalize;
  }
`;

export const EmailContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 50%;
  flex-direction: column;

  @media (max-width: 1300px) {
    gap: 5px;
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  border-radius: 10px;

  @media (max-width: 950px) {
    width: 100%;
    padding: 10px;
  }
`;
export const FormRow = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  label {
    text-transform: capitalize;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 13px 10px;
    border-radius: 5px;
    border: 0;
    outline: 0;
    box-shadow: 0 0 1px 1px #666;
    resize: none;

    &:focus {
      outline: 0;
      box-shadow: 0 0 5px 1px #aaa;
    }
  }

  @media (max-width: 950px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const EmailFooter = styled.div`
  display: flex;

  button {
    width: 300px;
    background-color: #0096ff;
    color: #fff;
    padding: 10px;
    font-weight: 500;
    cursor: pointer;
    font-size: 24px;
    border: 1px solid #0096ff;
    border-radius: 5px;
    text-transform: capitalize;
  }
`;
