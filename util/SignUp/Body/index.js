import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const SignUpArray = [
  {
    multiple_input: [
      {
        label: "Your fullname*",
        type: "text",
        name: "name",
        placeholder: "Enter Your Fullname here",
        classbody: "inputbody",
        classname: "multiple-input",
        labelclassname: "labelclass",
      },
      {
        label: "Username*",
        type: "text",
        name: "user_name",
        placeholder: "Enter Your Username here",
        classbody: "inputbody",
        classname: "multiple-input",
        labelclassname: "labelclass",
      },
    ],
  },
  {
    multiple_input: [
      {
        label: "Email Address*",
        type: "email",
        name: "email",
        placeholder: "Enter Your work email",
        classbody: "inputbody",
        classname: "multiple-input",
        labelclassname: "labelclass",
      },
      {
        label: "Select Gender",
        select: "Select",
        select_name: "gender",
        classbody: "inputbody",
        classname: "multiple-input",
        labelclassname: "labelclass",
        option: [
          {
            value: "Select Gender",
            classname: "select_class",
          },
          {
            value: "Male",
            classname: "select_class",
          },
          {
            value: "Female",
            classname: "select_class",
          },
          {
            value: "Others",
            classname: "select_class",
          },
        ],
      },
    ],
  },
  {
    label: "Password(6 or more characters)*",
    type: "password",
    name: "password",
    password: "password",
    iconShow: BsEyeFill,
    iconRemove: BsEyeSlashFill,
    classicon: "passicon",
    classiconitem: "passiconitem",
    placeholder: "Enter Your password",
    classbody: "inputbody",
    classname: "input",
  },
  {
    multiple_input: [
      {
        label: "Referral code",
        type: "text",
        name: "referral_code",
        placeholder: "Enter a referral code if you have one",
        classbody: "inputbody",
        classname: "multiple-input",
        labelclassname: "labelclass",
      },
      {
        label: "Phone number*",
        type: "text",
        name: "mobile_no",
        placeholder: "Enter your phone no",
        classbody: "inputbody",
        classname: "multiple-input",
        labelclassname: "labelclass",
      },
    ],
  },
  {
    type: "checkbox",
    description: "I agree to terms & conditions",
    classbody: "checkerbody",
    name: "checker",
    classname: "checker",
    classdescription: "checkerdescription",
  },
  {
    type: "submit",
    value: "Sign in",
    classbody: "submitbody",
    classname: "submit",
  },
];

export default SignUpArray;
