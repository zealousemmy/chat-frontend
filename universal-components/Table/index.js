import React from "react";
import { TableFooter, TableWrapper } from "./styles";

const Table = ({ data, columns, hover, stripped }) => {
  return (
    <>
      <TableWrapper stripped={stripped} hover={hover}>
        <table>
          <thead>
            <tr>
              {columns.map((head) => (
                <th key={Math.random()}>{head.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                {columns.map((col) => (
                  <td key={row[col.field]}>
                    {row[col.field] === "status" ? (
                      <span
                        className={`status${
                          row[col.field] ? "Active" : "Inactive"
                        }`}
                      >
                        {row[col.field] ? "active" : "inactive"}
                      </span>
                    ) : (
                      row[col.field]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrapper>
      {/* <TableFooter>
        <button className="control">previous</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>

        <button className="control">next</button>
      </TableFooter> */}
    </>
  );
};

export default Table;
