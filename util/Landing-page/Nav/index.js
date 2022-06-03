import Abolle from "../../../asset/abolle.svg";
import SearchInput from "../../../universal-components/Search-Input";

export const NavArray = [
  {
    classname: "firstnavitem",
    section: [
      {
        image: Abolle,
        text: "Abolle",
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
        link: "/signin",
        link_text: "Sign In",
        classbody: "signbody",
        classname: "signclass",
        classnameitem: "signitem",
      },
      {
        link: "/signup",
        link_text: "Sign Up",
        classbody: "signbody",
        classname: "signclass",
        classnameitem: "signitem",
      },
    ],
  },
];
