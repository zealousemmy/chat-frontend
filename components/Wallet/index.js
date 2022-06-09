import React, { useState } from "react";
import { withTheme } from "styled-components";
import {
  WalletBalance,
  WalletWrapper,
  WalletTransactions,
  WalletWrapperLeft,
  WalletWrapperRight,
  WalletInformation,
} from "./styles";
import { COLUMNS, DATA } from "../../util/Wallet/Transactions";
import { BsCash } from "react-icons/bs";
import WalletInfo from "../../util/Wallet/WalletInfo";
import Modal from "../../universal-components/Modal";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";

const Wallet = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Nav NavArrayContent={NavArrayDashboard} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <WalletWrapper show={showModal}>
        <WalletWrapperLeft>
          {/**########### Wallet Balance Begins Here */}
          <WalletBalance>
            <h3>Balance</h3>
            <div className="wallet__balance-content">
              <div className="wallet__balance-contentText">
                <p>The total amount of money in your wallet is:</p>
                <p>Your wallet number is: ############</p>
              </div>
              <h2 className="wallet__balance-contentAmount">#15,300</h2>
              <button
                className="wallet__balance-contentButton"
                onClick={() => setShowModal(!showModal)}
              >
                cashout <BsCash />
              </button>
            </div>
          </WalletBalance>

          {/**########### Wallet Balance Ends Here */}
          {/**########### Wallet Transactions Begins Here */}
          <WalletTransactions>
            <h3>Transactions</h3>
            <table className="wallet__transactions-content">
              <thead>
                <tr>
                  {COLUMNS.map((column) => (
                    <td key={column.accessor}>{column.Header}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DATA.map((data) => (
                  <tr key={data.id}>
                    <td>
                      <span>S/N:</span>
                      {data.id}
                    </td>
                    <td>
                      <span>Type:</span>
                      {data.type}
                    </td>
                    <td>
                      <span>Purpose:</span>
                      {data.purpose}
                    </td>
                    <td>
                      <span>Amount:</span>
                      {data.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </WalletTransactions>
          {/**########### Wallet Transactions Ends Here */}
        </WalletWrapperLeft>
        <WalletWrapperRight>
          <WalletInformation>
            <div className="wallet__info-header">
              <h3>Wallet Information</h3>
            </div>
            <div className="wallet__info-content">
              {WalletInfo.map((info) => (
                <div className="wallet__info-contentItem" key={info.title}>
                  {info.title}
                  <span>{info.figure}</span>
                </div>
              ))}
            </div>
          </WalletInformation>
        </WalletWrapperRight>
      </WalletWrapper>
    </>
  );
};

export default withTheme(Wallet);
