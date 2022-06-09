import styled from "styled-components";

export const FormStyles = styled.div`
  /* color: ${({ Color, signature }) =>
    signature ? Color.TextColor : Color.PrimaryColor}; */

  .inputbody {
    width: ${({ width }) => width};
    margin: 0 auto;
    padding: 4px 0px;
    position: relative;

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

    .passicon {
      color: ${({ Color }) => Color.TextColor};
      position: absolute;
      z-index: 3;
      left: 20.5rem;
      top: 2.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      cursor: pointer;

      .passiconitem {
        font-size: 1.3rem;
      }
    }
  }

  .checkerbody {
    display: flex;
    align-items: center;
    width: ${({ width }) => width};
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

export const MultipleInputDiv = styled.div`
  overflow: hidden;
  width: ${({ width }) => width};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;

  .mulitple {
    position: relative;
    width: ${({ Arr }) => `calc(100% / ${Arr + 0.1})`};

    .mulitples {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .labelclass {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        padding: 5px 0px;
      }

      .multiple-input {
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

    .passicon {
      color: ${({ Color }) => Color.TextColor};
      position: absolute;
      z-index: 3;
      left: 24rem;
      top: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      cursor: pointer;

      .passiconitem {
        font-size: 1.3rem;
      }
    }
  }
`;
