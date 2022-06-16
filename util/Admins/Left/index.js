import PosterCommunity from "../../../Mono-Component/posters/Community";

export const AdminLeftArray = [
  {
    section: [
      {
        link: "/dashboard/channelpost",
        link_text: "Overview",
      },
      {
        link: "/dashboard/channelpost/createpost",
        link_text: "Approvals",
      },
      {
        link: "/dashboard/channelpost/approval",
        link_text: "Emailling",
      },
      {
        link: "/dashboard/channelpost/rules",
        link_text: "Channels review",
      },
      {
        link: "/dashboard/channelpost/member",
        link_text: "Special events",
      },
      {
        link: "/dashboard/channelpost/admins",
        link_text: "Cashouts",
      },
    ],
  },
  {
    section: [{ component: PosterCommunity }],
  },
];
