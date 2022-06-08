import Dashboard from "../../../asset/Icons/dashboard.svg";
import Channel from "../../../asset/Icons/view1.svg";
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
        link: "/",
        text_logo: "Abolle",
        classtext: "textstyle",
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
        link_image: "dashboardlinkimage",
        classbody: "dashboardlinkbody",
        classname: "dashboardlink",
        classnameitem: "dashboardlinkitem",
      },
      {
        link: "/dashboard/channel",
        icon: Channel,
        link_text: "Channel",
        link_image: "dashboardlinkimage",
        classbody: "dashboardlinkbody",
        classname: "dashboardlink",
        classnameitem: "dashboardlinkitem",
      },
      {
        link: "/dashboard/notification",
        icon: Notification,
        link_text: "Notification",
        link_image: "dashboardlinkimage",
        classbody: "dashboardlinkbody",
        classname: "dashboardlink",
        classnameitem: "dashboardlinkitem",
      },
      {
        link: "/dashboard/wallet",
        icon: Wallet,
        link_text: "Wallet",
        link_image: "dashboardlinkimage",
        classbody: "dashboardlinkbody",
        classname: "dashboardlink",
        classnameitem: "dashboardlinkitem",
      },
      {
        link: "/dashboard/person",
        icon: Person,
        link_text: "Person",
        link_image: "dashboardlinkimage",
        classbody: "dashboardlinkbody",
        classname: "dashboardlink",
        classnameitem: "dashboardlinkitem",
      },
    ],
  },
];

export default NavArrayDashboard;
