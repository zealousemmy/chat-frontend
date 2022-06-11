import styled from "styled-components";

export const SubHeaderStyles = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  hr {
    width: 82%;

    @media (max-width: 1024px) {
      width: 72%;
    }

    @media (max-width: 920px) {
      width: 68%;
    }

    @media (max-width: 720px) {
      width: 78%;
    }

    @media (max-width: 520px) {
      width: 68%;
    }

    @media (max-width: 414px) {
      width: 68%;
    }

    @media (max-width: 290px) {
      width: 58%;
    }
  }

  .optionbody {
    display: flex;
    align-items: center;
    margin-left: 10px;

    /* select {
      border: none;
      outline: none;
      background-color: transparent;
      font-weight: bolder;
      font-size: 16px;

      option {
        border: none;
        background-color: transparent;
        font-weight: 500px;
      }
    } */
    p {
      font-size: 17px;
      font-weight: 400;

      @media (max-width: 1024px) {
        font-size: 14px;
      }

      @media (max-width: 920px) {
        font-size: 13px;
      }

      @media (max-width: 720px) {
        font-size: 14px;
      }

      @media (max-width: 414px) {
        font-size: 13px;
      }

      @media (max-width: 290px) {
        font-size: 10px;
      }
    }

    .dropdownbody {
      cursor: pointer;
      margin-left: 5px;

      .dropdownheader {
        display: flex;
        align-items: center;
        h3 {
          color: #000;
          margin-right: 4px;

          @media (max-width: 1024px) {
            font-size: 14px;
            margin-right: 2px;
          }

          @media (max-width: 720px) {
            font-size: 13px;
            margin-right: 2px;
          }

          @media (max-width: 414px) {
            font-size: 12px;
            margin-right: 2px;
          }
        }
      }
      .dropdownitembody {
        position: absolute;
        background-color: ${({ Color }) => Color.BBg};
        padding: 10px 12px;
        border-radius: 4px;

        .dropdownitem {
          h3 {
            color: ${({ Color }) => Color.PrimaryColor};

            @media (max-width: 720px) {
              font-size: 13px;
              margin-right: 2px;
            }

            @media (max-width: 414px) {
              font-size: 12px;
              margin-right: 2px;
            }
          }
        }
      }
    }
  }
`;
