import React from "react";

const SignInArray = [
  {
    label: "Email Address",
    type: "email",
    name: "email",
    placeholder: "Enter Your work email",
    classbody: "inputbody",
    classname: "input",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Enter Your password",
    classbody: "inputbody",
    classname: "input",
  },
  {
    type: "checkbox",
    description: "I agree to terms & conditions",
    name: "checker",
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
