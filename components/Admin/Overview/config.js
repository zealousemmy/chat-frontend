import { BiEdit } from "react-icons/bi";
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
    header: "S/N",
    field: "id",
  },
  {
    header: "Email",
    field: "email",
  },
  {
    header: "Username",
    field: "username",
  },
  {
    header: "Status",
    field: "status",
  },
  {
    header: "Role",
    field: "role",
  },
  {
    header: "Registration date",
    field: "regDate",
  },
  {
    header: "Verify",
    field: "verify",
  },
  {
    header: "Edit",
    field: "edit",
  },
];

export const DATA = [
  {
    id: 1,
    username: "Deposit",
    email: "Sincere@april.biz",
    status: true,
    role: "User",
    regDate: "17th,march,2022 17:56",
    verify: <button className="verify">Verify</button>,
    edit: <BiEdit className="editBtn" />,
  },
  {
    id: 2,
    username: "Deposit",
    email: "Sincere@april.biz",
    status: false,
    role: "User",
    regDate: "17th,march,2022 17:56",
    verify: <button className="verify">Verify</button>,
    edit: <BiEdit className="editBtn" />,
  },
];
