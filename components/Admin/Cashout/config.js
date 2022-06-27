import { FaEdit } from "react-icons/fa";

export const CashoutRequestConfig = [
  {
    id: 1,
    label: "Total cashouts",
  },
  {
    id: 2,
    label: "Pending request",
  },
  {
    id: 3,
    label: "Approval cashout",
  },
  {
    id: 4,
    label: "Number of user that has cashed out",
  },
];

export const COLUMNS = [
  {
    header: "S/N",
    field: "id",
  },
  {
    header: "Account name",
    field: "account_name",
  },

  {
    header: "Account number",
    field: "account_number",
  },
  {
    header: "Bank name",
    field: "bank_name",
  },
  {
    header: "Amount(#)",
    field: "amount",
  },
  {
    header: "Date applied",
    field: "created_at",
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
