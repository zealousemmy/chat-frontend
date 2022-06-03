import Abolle from "../../../asset/abolle.svg";
import SearchInput from "../../../universal-components/Search-Input";

export const SignIArray = [
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
        link: "/signup",
        link_description: "Already have an account?",
        link_text: "Sign Up",
        classbody: "signlinkbody",
        classname: "signlink",
        classnameitemD: "signlinkitemD",
        classnameitem: "signlinkitem",
      },
    ],
  },
];
