import styled from "styled-components";

export const NavDropDownStyles = styled.div`
  width: 8rem;
  background-color: ${({ Color }) => Color.TertiaryColor};
  position: absolute;
  top: 3.3rem;
  z-index: 3;
  padding: 10px 0px;
  border-radius: 0px 0px 5px 5px;

  .dashboarddropdownlinkbody {
    margin: 3px 0px;

    .dashboarddropdownlink {
      a {
        text-decoration: none;

        .dashboarddropdownlinkitem {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 5px 10px;
          color: ${({ Color }) => Color.FedaColor && Color.FedaColor};

          .dashboarddropdownlinkimage {
            display: flex;
            justify-content: center;
            align-items: center;

            .dashboarddropdownlinkimageitem {
              width: 20px;
              height: 20px;
            }
          }

          h4 {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
          }
        }
        .active {
          font-style: normal;
          font-weight: 500;
          background-color: ${({ Color }) => Color.TextColor};
          color: ${({ Color }) => Color.TertiaryColor};
        }
      }
    }
  }
  .dashboarddropdownbutton_body {
    width: 100%;
    margin: 3px 0px;

    .dashboarddropdownbutton_link {
      width: 100%;

      button {
        width: 100%;
        border: none;
        outline: none;
        background-color: transparent;
        color: ${({ Color }) => Color.FedaColor && Color.FedaColor};

        .dashboarddropdownbutton_linkitem {
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 5px 10px;

          h4 {
            font-style: normal;
            font-weight: 400;
          }

          .dashboarddropdownbutton_linkimage {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }

  @media (max-width: 1090px) {
    top: 2.7rem;
    left: -4rem;
  }

  @media (max-width: 720px) {
    top: 2rem;
    left: -6rem;
  }
`;
