import { BiEdit } from "react-icons/bi";

export const ChannelReviewConfig = [
  {
    id: 1,
    label: "Total Channels",
    figure: 917,
  },
  {
    id: 2,
    label: "Pending Channels",
    figure: 2917,
  },
  {
    id: 3,
    label: "Approved Channels",
    figure: 2917,
  },
  {
    id: 4,
    label: "Number of admins across channels ",
    figure: 2917,
  },
  {
    id: 5,
    label: "Verified Channels ",
    figure: 2917,
  },
];

export const COLUMNS = [
  {
    header: "S/N",
    field: "id",
  },
  {
    header: "Channel Name",
    field: "channelName",
  },
  {
    header: "Channel Type",
    field: "channelType",
  },
  {
    header: "Status",
    field: "status",
  },
  {
    header: "Edit",
    field: "edit",
  },
];

export const DATA = [
  {
    id: 1,
    channelName: "Politics",
    channelType: "Public",
    status: true,
    edit: <BiEdit className="editBtn" />,
  },
];
