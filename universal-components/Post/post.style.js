import styled from "styled-components";

export const PostStyles = styled.div`
  color: ${({ Color, signature }) =>
    signature ? Color.TextColor : Color.PrimaryColor};
  width: 100%;
  padding: 20px 0px;

  .inputbody {
    /* width: ${({ width }) => width}; */
    width: 64%;
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
      text-align: center;
      border: 1px solid ${({ Color }) => Color.SecondaryColor};
      background-color: ${({ Color }) =>
        Color.PrimaryColor && Color.PrimaryColor};

      &:focus {
        outline: 0;
        border: 1px solid ${({ Color }) => Color.BBg};
        box-shadow: 0 0 5px 1px #aaa;
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
