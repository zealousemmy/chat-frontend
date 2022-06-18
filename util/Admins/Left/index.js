import PosterCommunity from "../../../Mono-Component/posters/Community";

export const AdminLeftArray = [
  {
    section: [
      {
        link: "/admin",
        link_text: "Overview",
      },
      {
        link: "/admin/approvals",
        link_text: "Approvals",
      },
      {
        link: "/admin/email",
        link_text: "Emailling",
      },
      {
        link: "/admin/review",
        link_text: "Channels review",
      },
      {
        link: "/admin/events",
        link_text: "Special events",
      },
      {
        link: "/admin/cashouts",
        link_text: "Cashouts",
      },
    ],
  },
  {
    section: [{ component: PosterCommunity }],
  },
];
