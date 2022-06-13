import { FaEdit } from "react-icons/fa";

export const OverviewInformationConfig = [
  {
    id: 1,
    label: "Total Registered Users",
    figure: 917,
  },
  {
    id: 2,
    label: "Total Post",
    figure: 2917,
  },
  {
    id: 3,
    label: "Total channels created",
    figure: 2917,
  },
  {
    id: 4,
    label: "Total logins by users",
    figure: 2917,
  },
  {
    id: 5,
    label: "Total cashouts",
    figure: 2917,
  },
];

export const COLUMNS = [
  {
    Header: "S/N",
    accessor: "id",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Username",
    accessor: "username",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Registration date",
    accessor: "regDate",
  },
  {
    Header: "Verify",
    accessor: "verify",
  },
  {
    Header: "Edit",
    accessor: "edit",
  },
];

export const DATA = [
  {
    id: 1,
    username: "Deposit",
    email: "Sincere@april.biz",
    status: 1,
    role: "User",
    regDate: "17th,march,2022 17:56",
    verify: <button>Verify</button>,
    edit: <FaEdit />,
  },
  {
    id: 1,
    username: "Deposit",
    email: "Sincere@april.biz",
    status: 1,
    role: "User",
    regDate: "17th,march,2022 17:56",
    verify: <button>Verify</button>,
    edit: <FaEdit />,
  },
  {
    id: 2,
    username: "Deposit",
    email: "Sincere@april.biz",
    status: 0,
    role: "User",
    regDate: "17th,march,2022 17:56",
    verify: <button>Verify</button>,
    edit: <FaEdit />,
  },
  {
    id: 3,
    username: "Deposit",
    email: "Sincere@april.biz",
    status: 1,
    role: "User",
    regDate: "17th,march,2022 17:56",
    verify: <button>Verify</button>,
    edit: <FaEdit />,
  },
  {
    id: 4,
    username: "Deposit",
    email: "Sincere@april.biz",
    status: 1,
    role: "User",
    regDate: "17th,march,2022 17:56",
    verify: <button>Verify</button>,
    edit: <FaEdit />,
  },
];
