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
      color: rgba(253, 255, 245, 0.5);
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

      &:focus {
        border: 1px solid ${({ Color }) => Color.BBg};
        box-shadow: 0 0 5px 1px #aaa;
      }
    }

    .passicon {
      color: ${({ Color }) => Color.TextColor};
      position: absolute;
      z-index: 3;
      left: 20rem;
      top: 1.7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      cursor: pointer;

      .passiconitem {
        font-size: 1.3rem;
      }

      @media (max-width: 414px) {
        left: 16rem;
      }

      @media (max-width: 350px) {
        left: 13rem;
      }

      @media (max-width: 300px) {
        top: ${({ sign }) => sign === "signup" && "2.7rem"};
      }

      @media (max-width: 290px) {
        left: 10rem;
      }
    }

    @media (max-width: 414px) {
      width: 300px;
    }

    @media (max-width: 350px) {
      width: 250px;
    }

    @media (max-width: 290px) {
      width: 200px;
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

        .file-icon-div {
          .file-icon {
            width: 24px;
            height: 24px;
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

    @media (max-width: 414px) {
      width: 300px;
    }

    @media (max-width: 350px) {
      width: 250px;
    }

    @media (max-width: 290px) {
      width: 200px;
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

      @media (max-width: 500px) {
        width: 300px;
      }

      @media (max-width: 414px) {
        width: 200px;
      }
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
        color: ${({ Color, sign }) =>
          sign ? "rgba(253, 255, 245, 0.5)" : Color.TextColor};
        text-align: left;

        @media (max-width: 570px) {
          font-size: 13px;
        }

        @media (max-width: 290px) {
          font-size: 11px;
        }
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

        &:focus {
          outline: 0;
          border: 1px solid ${({ Color }) => Color.BBg};
          box-shadow: 0 0 5px 1px #aaa;
        }
      }

      .passicon {
        color: ${({ Color }) => Color.TextColor};
        position: relative;
        z-index: 3;
        left: 13rem;
        top: -2.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
        cursor: pointer;

        .passiconitem {
          font-size: 1.3rem;
        }

        @media (max-width: 1400px) {
          left: 11rem;
        }

        @media (max-width: 1200px) {
          left: 9rem;
        }

        @media (max-width: 1024px) {
          left: 7rem;
        }

        @media (max-width: 920px) {
          left: 6rem;
        }

        @media (max-width: 720px) {
          left: 5rem;
        }

        @media (max-width: 600px) {
          left: 4rem;
        }

        @media (max-width: 500px) {
          left: 8rem;
        }

        @media (max-width: 450px) {
          left: 7rem;
        }

        @media (max-width: 390px) {
          left: 6rem;
        }

        @media (max-width: 350px) {
          left: 5rem;
        }

        @media (max-width: 290px) {
          left: 4rem;
        }
      }

      @media (max-width: 500px) {
        flex-direction: column;
      }
    }

    @media (max-width: 500px) {
      width: ${({ form }) => (form ? "100%" : "100%")};
    }
  }

  @media (max-width: 500px) {
    padding: ${({ sign }) => sign && "3px 0px"};
    flex-direction: column;
  }

  @media (max-width: 414px) {
    width: 300px;
  }

  @media (max-width: 350px) {
    width: 250px;
  }

  @media (max-width: 290px) {
    width: 200px;
  }
`;
