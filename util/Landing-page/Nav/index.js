import Abolle from "../../../asset/abolle.svg";
import SearchInput from "../../../universal-components/Search-Input";
import { FaBars } from "react-icons/fa";

export const NavArray = [
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
        link: "/auth/signin",
        link_text: "Sign In",
        classbody: "signbody",
        classname: "signclass",
        classnameitem: "signitem",
      },
      {
        link: "/auth/signup",
        link_text: "Sign Up",
        classbody: "signbody",
        classname: "signclass",
        classnameitem: "signitem",
      },
      {
        component: FaBars,
        classbody: "signbodyicon",
        classname: "signclassicon",
        classnameitem: "signitemicon",
      },
    ],
  },
];
