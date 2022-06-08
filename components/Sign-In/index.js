import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import BlueBackground from "../../asset/images/bluebackground.svg";
import { SignIArray } from "../../util/SignIn/Nav";
import Form from "../../universal-components/Form";
import { FcGoogle } from "react-icons/fc";
import SignInArray from "../../util/SignIn/Body";
import NavArrayFooter from "../../util/SignUp/Footer";
import { useState } from "react";
import { useRouter } from "next/router";

const SignInComponent = ({ theme: { Color } }) => {
  const router = useRouter();
  const [logForm, setLogForm] = useState({});

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setLogForm({ ...logForm, [name]: value });
  };
  console.log(logForm);

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(logForm).length === 0) {
      return console.log("email and password fields empty");
    } else if (Object.keys(logForm).length < 2) {
      return console.log("a field is missing");
    } else if (logForm.email === "" || logForm.password === "") {
      return console.log("password field is incorrect");
    } else if (logForm.email === null || logForm.password === null) {
      return console.log("password field is incorrect");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <BodyDiv Color={Color} Bg={BlueBackground} sign={"signin"}>
      <Nav NavArrayContent={SignIArray} navrouter={"from-signin-header"} />
      <div className={"sign"}>
        <div className={"signmain"}>
          <div className={"signmainbody"}>
            <div className={"signbody"}>
              <div className={"signheader"}>
                <h2>Sign In your account</h2>
                <p>
                  Kindly input your details to successfuly sign up as a new user
                  in Abolle
                </p>
              </div>
              <div>
                <Form
                  FormArray={SignInArray}
                  sign={"signin"}
                  HandleChange={HandleChange}
                  HandleSubmit={HandleSubmit}
                />
              </div>
              <div className={"signfotter"}>
                <div>
                  <FcGoogle />
                  <p>Sign in with Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nav
        NavArrayContent={NavArrayFooter}
        signbottom={"signbottom"}
        navrouter={"from-signin-footer"}
      />
    </BodyDiv>
  );
};

export default withTheme(SignInComponent);
