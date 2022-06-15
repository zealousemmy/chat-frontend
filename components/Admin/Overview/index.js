import React, { useState } from "react";
import Container from "../../../universal-components/Container";
import SearchInput from "../../../universal-components/Search-Input";
import Card from "../Card";
import { COLUMNS, DATA, OverviewInformationConfig } from "./config";
import {
  OverviewWrapper,
  OverviewInformation__Users,
  OverviewInformation__UsersTable,
  OverviewInformation__UsersTableFooter,
  OverviewInformation__Wrapper,
  OverviewInformation__WrapperCards,
} from "./styles";

const Overview = () => {
  return (
    <OverviewWrapper>
      <Container>
        <OverviewInformation__Wrapper>
          <h2>Information Overview</h2>
          <OverviewInformation__WrapperCards>
            {OverviewInformationConfig.map(({ label, figure, id }) => (
              <Card label={label} figure={figure} key={id} />
            ))}
          </OverviewInformation__WrapperCards>
        </OverviewInformation__Wrapper>
        <OverviewInformation__Users>
          <h2>All Users</h2>
          <SearchInput placeholder={"Search for any user"} />

          <OverviewInformation__UsersTable>
            <table className="OverviewInformation__UsersTable-content ">
              <thead className="table-text-header">
                <tr>
                  {COLUMNS.map((column) => (
                    <td key={column.accessor}>{column.Header}</td>
                  ))}
                </tr>
              </thead>
              <tbody className="table-text">
                {DATA.map((data) => (
                  <tr key={data.id}>
                    <td>
                      <span>S/N:</span>
                      {data.id}
                    </td>
                    <td>
                      <span>Email:</span>
                      {data.email}
                    </td>
                    <td>
                      <span>Username:</span>
                      {data.username}
                    </td>
                    <td>
                      <span>Status:</span>
                      {data.status === 1 ? "active" : "inactive"}
                    </td>
                    <td>
                      <span>Role:</span>
                      {data.role}
                    </td>
                    <td>
                      <span>Registration Date:</span>
                      {data.regDate}
                    </td>
                    <td>
                      <span>Verify:</span>
                      {data.verify}
                    </td>
                    <td>
                      <span>Edit:</span>
                      {data.edit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <OverviewInformation__UsersTableFooter>
              <button className="control">previous</button>
              <button>1</button>
              <button>1</button>
              <button>1</button>
              <button>1</button>

              <button className="control">next</button>
            </OverviewInformation__UsersTableFooter>
          </OverviewInformation__UsersTable>
        </OverviewInformation__Users>
      </Container>
    </OverviewWrapper>
  );
};

export default Overview;
