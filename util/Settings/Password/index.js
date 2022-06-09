import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export const PasswordInfoArray = [
  {
    multiple_input: [
      {
        label: "Old Password",
        type: "password",
        name: "old password",
        iconShow: BsEyeFill,
        iconRemove: BsEyeSlashFill,
        classicon: "passicon",
        classiconitem: "passiconitem",
        placeholder: "Enter Your Old Password",
        classbody: "inputbody",
        classname: "multiple-input",
        labelclassname: "labelclass",
      },
      {
        label: "New Password",
        type: "password",
        name: "new password",
        iconShow: BsEyeFill,
        iconRemove: BsEyeSlashFill,
        classicon: "passicon",
        classiconitem: "passiconitem",
        placeholder: "Enter Your New Password",
        classbody: "inputbody",
        classname: "multiple-input",
        labelclassname: "labelclass",
      },
    ],
  },
  {
    type: "submit",
    value: "Save changes",
    classbody: "submitbody",
    classname: "submit",
  },
];
