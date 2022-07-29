import React from "react";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import { COLUMNS, DATA } from "../../util/Referrals/Referals";
import {
  ReferralInformation,
  ReferralFriend,
  ReferralWrapper,
  ReferralTable,
  FormRow,
  Form,
} from "./styles";

const Referrals = () => {
  return (
    <>
      <Nav NavArrayContent={NavArrayDashboard} />
      <ReferralWrapper>
        <ReferralInformation>
          <div className="referral__title">
            <h2>Referals</h2>
          </div>
          <div className="referral__info-container">
            <p className="referral__info-header">
              Invite someone and earn more money when someone join Abolle
              through you
            </p>
            <div className="referral__info-content">
              <p>Referral code XP-#############</p>
              <button className="referral__infoCopyButton">copy</button>
            </div>
          </div>
          <div className="referral__info-footer"></div>
        </ReferralInformation>
        <ReferralFriend>
          <div className="referral__friend-header">
            <h3>Input your friend details here</h3>
            <p>Help your friend by signing him to abolle</p>
          </div>
          <Form>
            <div className="referral__friend-content">
              <FormRow>
                <label>
                  Their email
                  <input type={"text"} placeholder="Email of your friend" />
                </label>
                <label>
                  Their name
                  <input
                    type={"text"}
                    placeholder="Enter name of your friend"
                  />
                </label>
              </FormRow>
              <FormRow>
                <label>
                  Your email
                  <input type={"text"} placeholder="Enter your email" />
                </label>
                <label>
                  Your name
                  <input type={"text"} placeholder="Enter your name" />
                </label>
              </FormRow>
            </div>
            <button className="referral__email-friend-Button">submit</button>
          </Form>
        </ReferralFriend>
        <ReferralTable>
          <h3>List of people your have referred</h3>
          <table className="referral__table-content">
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
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.date}</td>
                  <td>{data.downline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ReferralTable>
      </ReferralWrapper>
    </>
  );
};

export default Referrals;
