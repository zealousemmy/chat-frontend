import React from "react";
import { TableFooter, TableWrapper } from "./styles";

const Table = ({ data, columns, hover, stripped }) => {
  return (
    <>
      {data.length > 0 ? (
        <>
          <TableWrapper stripped={stripped} hover={hover}>
            <table>
              <thead>
                <tr>
                  {columns.map((head) => (
                    <th key={head.field}>{head.header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id}>
                    {columns.map((col) => (
                      <td key={row[col.field]}>
                        {typeof row[col.field] === "boolean" ? (
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
          <TableFooter>
            <button className="control">previous</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>

            <button className="control">next</button>
          </TableFooter>
        </>
      ) : (
        "No data found"
      )}
    </>
  );
};

export default Table;
