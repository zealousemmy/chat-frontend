import Abolle from "../../../asset/abolle.svg";
import SearchInput from "../../../universal-components/Search-Input";
import { MdDashboard, MdNotifications } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { BsFillPersonFill, BsFileSpreadsheet } from "react-icons/bs";
import { SiSpringsecurity } from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { BiLogOutCircle } from "react-icons/bi";
import { MdPostAdd } from "react-icons/md";

const HandleLogOut = ()=>{
  if(typeof window !== "undefined"){
    window.localStorage.removeItem("xur")
    window.localStorage.removeItem("xtk")
    window.location.reload()
  }
}

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
        linkButton: "person",
        icon: BsFillPersonFill,
        link_text: "Person",
        link_image: "dashboardbutton_linkimage",
        link_select: "person",
        link_dropdown: [
          {
            link: "/dashboard/person",
            icon: FiSettings,
            link_text: "Settings",
            link_image: "dashboarddropdownlinkimage",
            link_imageitem: "dashboarddropdownlinkimageitem",
            classbody: "dashboarddropdownlinkbody",
            classname: "dashboarddropdownlink",
            classnameitem: "dashboarddropdownlinkitem",
          },{
            link: "/dashboard/myposts",
            icon: MdPostAdd,
            link_text: "My Post",
            link_image: "dashboarddropdownlinkimage",
            link_imageitem: "dashboarddropdownlinkimageitem",
            classbody: "dashboarddropdownlinkbody",
            classname: "dashboarddropdownlink",
            classnameitem: "dashboarddropdownlinkitem",
          },
          {
            linkButton: "dashboard",
            icon: BiLogOutCircle,
            link_text: "Logout",
            link_image: "dashboarddropdownbutton_linkimage",
            classbody: "dashboarddropdownbutton_body",
            classname: "dashboarddropdownbutton_link",
            classnameitem: "dashboarddropdownbutton_linkitem",
            action:HandleLogOut
          },
        ],
        classbody: "dashboardbutton_body",
        classname: "dashboardbutton_link",
        classnameitem: "dashboardbutton_linkitem",
      },
      {
        linkButton: "dashboard",
        icon: SiSpringsecurity,
        // link_text: "Person",
        link_select: "mobile-select",
        link_image: "dashboardbutton_linkimage",
        classbody: "dashboardbutton_body",
        classname: "dashboardbutton_link",
        classnameitem: "dashboardbutton_linkitem",
      },
    ],
  },
];

export default NavArrayDashboard;
