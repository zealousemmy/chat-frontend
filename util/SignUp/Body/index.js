import React from "react";

const SignUpArray = [
  {
    label: "Your fullname",
    type: "text",
    placeholder: "Enter Your Fullname here",
    classbody: "inputbody",
    classname: "input",
  },
  {
    label: "Email Address*",
    type: "email",
    placeholder: "Enter Your work email",
    classbody: "inputbody",
    classname: "input",
  },
  {
    label: "Password(6 or more characters)",
    type: "password",
    placeholder: "Enter Your password",
    classbody: "inputbody",
    classname: "input",
  },
  {
    label: "Referral code(optional)",
    type: "text",
    placeholder: "Enter a referral code if you have one",
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

export default SignUpArray;
