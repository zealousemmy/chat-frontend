import styled from "styled-components";

export const AccordionWrapper = styled.div`
  .accordion-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }

  .accordion-header {
    border-radius: ${({ isActive }) => (isActive ? "10px 10px 0 0" : "10px")};
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background-color: ${({ isActive }) => (isActive ? " #e7e7e7f9;" : "#fff")};
    gap: 20px;

    .accordion-header__avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;

      img {
        border-radius: 50%;
      }
    }

    .accordion-header__text {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 8px;
    }
  }

  .accordion-header:hover {
    background-color: #e7e7e7f9;
  }

  .accordion-header,
  .accordion-content {
    padding: 1rem;

    @media (max-width: 300px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .accordion-content {
    background-color: #fff;
    border-radius: ${({ isActive }) => (isActive ? "0 0 10px 10px" : "10px")};
    transition: all 5s ease-in;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .accordion-content__footer {
    padding: 1rem 0;
    display: flex;
    gap: 20px;

    button {
      padding: 10px;
      border: 2px solid;
      border-radius: 10px;
      width: 100px;
      cursor: pointer;
    }

    button.decline {
      background-color: #fff;
      color: firebrick;
    }

    button.accept {
      background-color: #fff;
      color: #fff;
      border-color: #40aa32;
      background-color: #40aa32;
    }
  }
  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`;
