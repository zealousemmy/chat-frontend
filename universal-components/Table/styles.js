import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  td,
  th {
    text-align: left;
    padding: 8px;
    text-transform: capitalize;
    @media (max-width: 600px) {
      display: block;
    }
  }
  tbody {
    tr {
      &:nth-child(odd) {
        background-color: ${({ stripped }) => stripped};
      }
      &:hover {
        background-color: ${({ hover }) => hover};
      }
    }
  }
`;

export const TableFooter = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    text-transform: capitalize;
    padding: 8px 9px;
    width: 31px;
    height: 31px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e0e0e0;
    border-radius: 5px;
    border: 0;
    box-shadow: #999 0 0 2px 0;
    cursor: pointer;
    font-weight: 700;

    &:hover {
      background-color: #0096ff;
      color: #ffffff;
    }
  }
  .control {
    background: transparent;
    border: 0;
    box-shadow: #777 0 0 0 0;
    padding: 0;
    width: fit-content;
    margin: 0 10px;

    &:hover {
      background: transparent;
      color: #000;
    }
  }
  .current {
    background-color: #0096ff;
    color: #fff;
  }
`;
