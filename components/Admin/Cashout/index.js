import React, { useState } from "react";
import Container from "../../../universal-components/Container";
import Nav from "../../../universal-components/Nav";
import SearchInput from "../../../universal-components/Search-Input";
import Table from "../../../universal-components/Table";
import NavArrayDashboard from "../../../util/New-User-Select-Channel/Nav";
import Card from "../Card";
import { CashoutRequestConfig, COLUMNS, DATA } from "./config";
import {
  CashoutRequestWrapper,
  CashoutRequest__Users,
  CashoutRequest__UsersTable,
  CashoutRequest__UsersTableFooter,
  CashoutRequest__Wrapper,
  CashoutRequest__WrapperCards,
} from "./styles";

const CashoutRequest = ({ title }) => {
  return (
    <>
      <Nav NavArrayContent={NavArrayDashboard} />
      <CashoutRequestWrapper>
        <Container>
          <CashoutRequest__Wrapper>
            <h2>{title}</h2>
            <CashoutRequest__WrapperCards>
              {CashoutRequestConfig.map(({ label, figure, id }) => (
                <Card label={label} figure={figure} key={id} />
              ))}
            </CashoutRequest__WrapperCards>
          </CashoutRequest__Wrapper>
          <CashoutRequest__Users>
            <h2>All request from users</h2>

            <CashoutRequest__UsersTable>
              <Table data={DATA} columns={COLUMNS} stripped={"#eee"} />;
            </CashoutRequest__UsersTable>
          </CashoutRequest__Users>
        </Container>
      </CashoutRequestWrapper>
    </>
  );
};

export default CashoutRequest;
