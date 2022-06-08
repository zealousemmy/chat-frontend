import React from "react";

const SignUpArray = [
  {
    label: "Your fullname",
    type: "text",
    name: "full name",
    placeholder: "Enter Your Fullname here",
    classbody: "inputbody",
    classname: "input",
  },
  {
    label: "Email Address*",
    type: "email",
    name: "email",
    placeholder: "Enter Your work email",
    classbody: "inputbody",
    classname: "input",
  },
  {
    label: "Password(6 or more characters)",
    type: "password",
    password: "password",
    placeholder: "Enter Your password",
    classbody: "inputbody",
    classname: "input",
  },
  {
    label: "Referral code(optional)",
    type: "text",
    name: "referral",
    placeholder: "Enter a referral code if you have one",
    classbody: "inputbody",
    classname: "input",
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
