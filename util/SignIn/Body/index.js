import React from "react";

const SignInArray = [
  {
    label: "Your Fullname",
    type: "text",
    placeholder: "Enter Your fullname here",
    classbody: "inputbody",
    classname: "input",
  },
  {
    label: "Email Address",
    type: "email",
    placeholder: "Enter Your work email",
    classbody: "inputbody",
    classname: "input",
  },
  {
    type: "checkbox",
    description: "I agree to terms & conditions",
    classbody: "checkerbody",
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

export default SignInArray;
