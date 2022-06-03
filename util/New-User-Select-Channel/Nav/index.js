import Dashboard from "../../../asset/Icons/dashboard.svg";
import Channel from "../../../asset/Icons/channel.svg";
import Notification from "../../../asset/Icons/notification.svg";
import Wallet from "../../../asset/Icons/wallet.svg";
import Person from "../../../asset/Icons/user.svg";
import Abolle from "../../../asset/abolle.svg";
import SearchInput from "../../../universal-components/Search-Input";

const NavArrayDashboard = [
  {
    classname: "firstnavitem",
    section: [
      {
        image: Abolle,
        text: "Abolle",
        classbody: "logobody",
        classname: "logoclass",
        classnameitem: "logoitem",
      },
    ],
  },
  {
    classname: "secondnavitem",
    section: [
      {
        component: SearchInput,
        placeholder: "search for anything here",
        classbody: "searchbody",
        classname: "searchclass",
        classnameitem: "searchitem",
      },
    ],
  },
  {
    classname: "thirdnavitem",
    section: [
      {
        link: "/dashboard",
        icon: Dashboard,
        link_text: "Dashboard",
        classbody: "dashboardlinkbody",
        classname: "dashboardlink",
        classnameitem: "dashboardlinkitem",
      },
      {
        link: "/channel",
        icon: Channel,
        link_text: "Channel",
        classbody: "dashboardlinkbody",
        classname: "dashboardlink",
        classnameitem: "dashboardlinkitem",
      },
      {
        link: "/notification",
        icon: Notification,
        link_text: "Notification",
        classbody: "dashboardlinkbody",
        classname: "dashboardlink",
        classnameitem: "dashboardlinkitem",
      },
      {
        link: "/wallet",
        icon: Wallet,
        link_text: "Wallet",
        classbody: "dashboardlinkbody",
        classname: "dashboardlink",
        classnameitem: "dashboardlinkitem",
      },
      {
        link: "/person",
        icon: Person,
        link_text: "Person",
        classbody: "dashboardlinkbody",
        classname: "dashboardlink",
        classnameitem: "dashboardlinkitem",
      },
    ],
  },
];

export default NavArrayDashboard;
