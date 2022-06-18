import React, { useState } from "react";
import Container from "../../../universal-components/Container";
import SearchInput from "../../../universal-components/Search-Input";
import Table from "../../../universal-components/Table";
import Card from "../Card";
import { COLUMNS, DATA, OverviewInformationConfig } from "./config";
import {
  OverviewWrapper,
  OverviewInformation__Users,
  OverviewInformation__UsersTable,
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
            <Table data={DATA} columns={COLUMNS} stripped={"#eee"} />
          </OverviewInformation__UsersTable>
        </OverviewInformation__Users>
      </Container>
    </OverviewWrapper>
  );
};

export default Overview;
