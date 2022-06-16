import styled from "styled-components";
export const ModalWrapper = styled.div`
  position: fixed;
  width: 100% !important;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 999;
  overflow-y: auto;
  padding: 30px 0;

  .modal__close {
    position: absolute;
    right: 20px;
    display: flex;
    align-items: center;
    color: #000;
    cursor: pointer;
  }

  .modal__footer {
    width: 100%;
    display: flex;
    justify-content: center;

    .modal__footerButton {
      display: flex;
      align-items: center;
      width: 250px;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
      padding: 10px;
      background-color: #0096ff;
      border: 2px solid #0096ff;
      color: #ffffff;
      text-transform: capitalize;
      border-radius: 5px;

      svg {
        font-size: 2rem;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 7rem;
  background-color: #e8e8e8;
  width: 40%;
  border-radius: 10px;
  position: relative;
  margin: auto;
  @media (max-width: 1500px) {
    width: 60%;
  }

  @media (max-width: 950px) {
    width: 90%;
    padding: 10px;
  }
`;
export const FormRow = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  background-color: #e8e8e8;
  margin-bottom: 20px;
  label {
    text-transform: capitalize;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 13px 10px;
    border-radius: 10px;
    font-weight: 600;
    border: 0;
    outline: 0;
    box-shadow: 0 0 1px 1px #aaa;
    background-color: transparent;
    resize: none;

    &:focus {
      outline: 0;
      box-shadow: 0 0 5px 1px #aaa;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column;
  }
`;
