import React, { useState } from "react";
import Container from "../../../universal-components/Container";
import Nav from "../../../universal-components/Nav";
import SearchInput from "../../../universal-components/Search-Input";
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

const CashoutRequest = () => {
  return (
    <>
      {/* <Nav NavArrayContent={NavArrayDashboard} /> */}
      <CashoutRequestWrapper>
        <Container>
          <CashoutRequest__Wrapper>
            <h2>Information CashoutRequest</h2>
            <CashoutRequest__WrapperCards>
              {CashoutRequestConfig.map(({ label, figure, id }) => (
                <Card label={label} figure={figure} key={id} />
              ))}
            </CashoutRequest__WrapperCards>
          </CashoutRequest__Wrapper>
          <CashoutRequest__Users>
            <h2>All Users</h2>
            <SearchInput placeholder={"Search for any user"} />

            <CashoutRequest__UsersTable>
              <table className="CashoutRequest__UsersTable-content ">
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
                        <span>Account name:</span>
                        {data.accountName}
                      </td>
                      <td>
                        <span>Account number:</span>
                        {data.accountNumber}
                      </td>
                      <td>
                        <span>Bank name:</span>
                        {data.bankname}
                      </td>
                      <td>
                        <span>Amount(#):</span>
                        {data.amount}
                      </td>
                      <td>
                        <span>Date applied:</span>
                        {data.appliedDate}
                      </td>
                      <td>
                        <span>Debit:</span>
                        <button className="verify">Credit</button>
                      </td>
                      <td>
                        <span>Debit:</span>
                        <button className="reject">Reject</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <CashoutRequest__UsersTableFooter>
                <button className="control">previous</button>
                <button>1</button>
                <button>1</button>
                <button>1</button>
                <button>1</button>

                <button className="control">next</button>
              </CashoutRequest__UsersTableFooter>
            </CashoutRequest__UsersTable>
          </CashoutRequest__Users>
        </Container>
      </CashoutRequestWrapper>
    </>
  );
};

export default CashoutRequest;
