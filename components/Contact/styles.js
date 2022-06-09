import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  padding: 10px 0;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const ContactContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;

  @media (max-width: 950px) {
    gap: 5px;
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
    font-weight: 400;
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
    font-weight: 600;
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

export const ContactFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 300px;
    background-color: #0096ff;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    border: 1px solid #0096ff;
    border-radius: 5px;
    text-transform: capitalize;
  }
`;
