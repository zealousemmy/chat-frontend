import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import Form from "../../universal-components/Form";
import Nav from "../../universal-components/Nav";
import SignUpArray from "../../util/SignUp/Body";
import { SignArray } from "../../util/SignUp/Nav";
import BlueBackground from "../../asset/images/bluebackground.svg";
import { FcGoogle } from "react-icons/fc";
import NavArrayFooter from "../../util/SignUp/Footer";
import { useState } from "react";

const SignUpComponent = ({ theme: { Color } }) => {
  const [logForm, setLogForm] = useState({});

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setLogForm({ ...logForm, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(logForm).length === 0) {
      return console.log("email and password fields empty");
    } else if (Object.keys(logForm).length < 3) {
      return console.log("a field is missing");
    } else if (logForm.email === "" || logForm.password === "") {
      return console.log("password field is incorrect");
    } else if (logForm.email === null || logForm.password === null) {
      return console.log("password field is incorrect");
    } else {
      router.push("/signin");
    }
  };

  return (
    <BodyDiv Color={Color} Bg={BlueBackground}>
      <Nav NavArrayContent={SignArray} navrouter={"from-signup-footer"} />
      <div className={"sign"}>
        <div className={"signmain"}>
          <div className={"signmainbody"}>
            <div className={"signbody"}>
              <div className={"signheader"}>
                <h2>Create your account</h2>
                <p>Kindly input your details to successfuly sign into Abolle</p>
              </div>
              <div>
                <Form FormArray={SignUpArray} />
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
      <Nav NavArrayContent={NavArrayFooter} navrouter={"from-signup-footer"} />
    </BodyDiv>
  );
};

export default withTheme(SignUpComponent);
