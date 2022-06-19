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
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import image from "../../asset/Icons/channel.svg";
import { SignInSchema } from "../../Authentication/schema";
import axios from "axios";
import { config } from "../../config";

const SignInComponent = ({ theme: { Color } }) => {
  const router = useRouter();
  const [logForm, setLogForm] = useState({});
  const [passwordShow, setPasswordShow] = useState(false);

  const passClick = () => {
    setPasswordShow(!passwordShow);
    console.log(passwordShow);
  };

  const FetchData = async (data) => {
    await axios.post(`${config}/login`, data).then((res) => {
      console.log(res);
    });
  };

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setLogForm({ ...logForm, [name]: value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(logForm);

    const isValid = await SignInSchema.isValid(logForm);

    if (isValid) {
      FetchData(logForm);
      // router.push("/dashboard");
    }
  };

  return (
    <BodyDiv Color={Color} Bg={BlueBackground} sign={"signin"}>
      <Nav NavArrayContent={SignIArray} navrouter={"from-signin-header"} />
      <div className={"sign"}>
        <div className={"signmain"}>
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
                passwordShow={passwordShow}
                passClick={passClick}
                width="364px"
              />
            </div>
            {/* <div className={"signfotter"}>
              <div>
                <FcGoogle />
                <p>Sign in with Google</p>
              </div>
            </div> */}
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
