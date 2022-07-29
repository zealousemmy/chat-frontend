import Dashboard from "../../../asset/Icons/dashboard.svg";
import Channel from "../../../asset/Icons/channel.svg";
import Notification from "../../../asset/Icons/notification.svg";
import Wallet from "../../../asset/Icons/wallet.svg";
import Person from "../../../asset/Icons/user.svg";
import Abolle from "../../../asset/abolle.svg";
import SearchInput from "../../../universal-components/Search-Input";

const NavArrayFooter = [
  {
    classname: "firstfooteritem",
    section: [
      {
        text: "Abolle © 2022",
        classbody: "signfootertextkbody",
        classtext: "signfootertext",
      },
    ],
  },
  {
    classname: "secondfooteritem",
    section: [
      {
        link: "/agreement",
        link_text: "User Agreement",
        classbody: "signfooterlinkbody",
        classname: "signfooterlink",
        classnameitem: "signfooterlinkitem",
      },
      {
        link: "/privacy",
        link_text: "Privacy Policy",
        classbody: "signfooterlinkbody",
        classname: "signfooterlink",
        classnameitem: "signfooterlinkitem",
      },
      {
        link: "/community",
        link_text: "Community Guidelines",
        classbody: "signfooterlinkbody",
        classname: "signfooterlink",
        classnameitem: "signfooterlinkitem",
      },
      {
        link: "/copyright",
        link_text: "Copyright Policy",
        classbody: "signfooterlinkbody",
        classname: "signfooterlink",
        classnameitem: "signfooterlinkitem",
      },
    ],
  },
  {
    classname: "thirdfooteritem",
    section: [
      {
        link: "/language",
        link_text: "Language",
        classbody: "signfooterbody",
        classname: "signfooter",
        classnameitem: "signfooteritem",
      },
    ],
  },
];

export default NavArrayFooter;
