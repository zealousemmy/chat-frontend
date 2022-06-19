import { FaEdit } from "react-icons/fa";

export const CashoutRequestConfig = [
  {
    id: 1,
    label: "Total cashouts",
    figure: 917,
  },
  {
    id: 2,
    label: "Pending request",
    figure: 2917,
  },
  {
    id: 3,
    label: "Approval cashout",
    figure: 2917,
  },
  {
    id: 4,
    label: "Number of user that has cashed out",
    figure: 2917,
  },
];

export const COLUMNS = [
  {
    header: "S/N",
    field: "id",
  },
  {
    header: "Account name",
    field: "accountName",
  },

  {
    header: "Account number",
    field: "accountNumber",
  },
  {
    header: "Bank name",
    field: "bankname",
  },
  {
    header: "Amount(#)",
    field: "amount",
  },
  {
    header: "Date applied",
    field: "appliedDate",
  },
  {
    header: "Debit",
    field: "debit",
  },
  {
    header: "Reject",
    field: "reject",
  },
];

export const DATA = [
  {
    id: 1,
    accountName: "Samuel Christian toyin",
    accountNumber: 2240576190,
    bankname: "Access bank",
    amount: 2000,
    appliedDate: "17th,march,2022 17:56",
    debit: <button className="verify">Credit</button>,
    reject: <button className="reject">verify</button>,
  },
];
