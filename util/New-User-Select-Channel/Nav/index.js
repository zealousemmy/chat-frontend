import Abolle from "../../../asset/abolle.svg";
import SearchInput from "../../../universal-components/Search-Input";
import { MdDashboard, MdNotifications } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { BsFillPersonFill, BsFileSpreadsheet } from "react-icons/bs";
import { SiSpringsecurity } from "react-icons/si";

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
      {
        button: "button",
        button_text: "Post",
        classbody: "buttonbody",
        classname: "buttonclass",
        classnameitem: "buttonitem",
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
        icon: MdDashboard,
        link_text: "Dashboard",
        link_image: "dashboardlinkimage",
        link_imageitem: "dashboardlinkimageitem",
        classbody: "dashboardlinkbody",
        classname: "dashboardlink",
        classnameitem: "dashboardlinkitem",
      },
      {
        link: "/dashboard/channel",
        icon: BsFileSpreadsheet,
        link_text: "Channel",
        link_image: "dashboardlinkimage",
        link_imageitem: "dashboardlinkimageitem",
        classbody: "dashboardlinkbody",
        classname: "dashboardlink",
        classnameitem: "dashboardlinkitem",
      },
      {
        link: "/dashboard/notification",
        icon: MdNotifications,
        link_text: "Notification",
        link_image: "dashboardlinkimage",
        link_imageitem: "dashboardlinkimageitem",
        classbody: "dashboardlinkbody",
        classname: "dashboardlink",
        classnameitem: "dashboardlinkitem",
      },
      {
        link: "/dashboard/wallet",
        icon: IoWalletOutline,
        link_text: "Wallet",
        link_image: "dashboardlinkimage",
        link_imageitem: "dashboardlinkimageitem",
        classbody: "dashboardlinkbody",
        classname: "dashboardlink",
        classnameitem: "dashboardlinkitem",
      },
      {
        link: "/dashboard/person",
        icon: BsFillPersonFill,
        link_text: "Person",
        link_image: "dashboardlinkimage",
        link_imageitem: "dashboardlinkimageitem",
        classbody: "dashboardlinkbody",
        classname: "dashboardlink",
        classnameitem: "dashboardlinkitem",
      },
      {
        linkButton: "dashboard",
        icon: SiSpringsecurity,
        linkButton_text: "Person",
        link_image: "dashboardbutton_linkimage",
        classbody: "dashboardbutton_linkbody",
        classname: "dashboardbutton_link",
        classnameitem: "dashboardbutton_linkitem",
      },
    ],
  },
];

export default NavArrayDashboard;
