import styled from "styled-components";

export const FormStyles = styled.div`
  color: ${({ Color, signature }) =>
    signature ? Color.TextColor : Color.PrimaryColor};

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
      left: 18.7rem;
      top: 1.8rem;
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

  .filebody {
    width: 64%;
    margin: 0px auto;
    text-align: left;
    padding: 10px 0px;
    cursor: pointer;
    color: ${({ Color }) => Color.TextColor};
    position: relative;

    label {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
    }

    .filebodycontent {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 4px 0px;
      cursor: pointer;

      .filecontent {
        display: flex;
        cursor: pointer;
        align-items: center;

        div {
          p {
            font-size: 15px;
            font-weight: 400;
          }
        }
      }

      .fileinput {
        width: 98%;
        opacity: 0;
        z-index: 3;
        position: absolute;
        cursor: pointer;
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
  width: ${({ width }) => width};
  margin: 0px auto;
  display: flex;
  /* align-items: center; */
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
        color: ${({ Color }) => Color.TextColor};
        text-align: left;
      }

      .multiple-input {
        width: 100%;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        padding: 12px 12px;
        border-radius: 6px;
        border: none;
        outline: none;
        border: 1px solid ${({ Color }) => Color.SecondaryColor};
        background-color: ${({ Color }) =>
          Color.PrimaryColor && Color.PrimaryColor};
      }

      .passicon {
        color: ${({ Color }) => Color.TextColor};
        position: absolute;
        z-index: 3;
        left: 21.5rem;
        top: 1.8rem;
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
  }
`;
