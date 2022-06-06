import styled from "styled-components";

export const FormStyles = styled.div`
  color: ${({ Color }) => Color.PrimaryColor && Color.PrimaryColor};

  .inputbody {
    width: 364px;
    margin: 0 auto;
    padding: 4px 0px;

    label {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
    }

    .input {
      width: 100%;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      padding: 12px 12px;
      border-radius: 6px;
      border: none;
      outline: none;
      background-color: ${({ Color }) =>
        Color.PrimaryColor && Color.PrimaryColor};
    }
  }

  .checkerbody {
    display: flex;
    align-items: center;
    width: 364px;
    margin: 0 auto;

    .checker {
      margin-right: 10px;
    }

    .checkerdescription {
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        color: rgba(253, 255, 245, 0.5);
      }
    }
  }

  .submitbody {
    padding: 15px 0px;
    text-align: center;

    .submit {
      width: 364px;
      border-radius: 6px;
      padding: 8px 0px;
      background-color: ${({ Color }) => Color.BBg && Color.BBg};
      color: ${({ Color }) => Color.PrimaryColor && Color.PrimaryColor};
      border: none;
      outline: none;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      box-shadow: 0px -8px 32px rgba(150, 196, 238, 0.1);
      cursor: pointer;
    }
  }
`;
