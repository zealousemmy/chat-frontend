import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import BlueBackground from "../../asset/images/bluebackground.svg";
import { SignIArray } from "../../util/SignIn/Nav";
import Form from "../../universal-components/Form";
import SignInArray from "../../util/SignIn/Body";
import NavArrayFooter from "../../util/SignUp/Footer";
import { useState } from "react";
import { useRouter } from "next/router";
import { SignInSchema } from "../../Authentication/schema";
import axios from "axios";
import { signInConfig } from "../../config";
import Notify from "../../util/notify";
// import { ToastContainer, toast, Zoom } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const SignInComponent = ({ theme: { Color } }) => {
  const router = useRouter();
  const [logForm, setLogForm] = useState({});
  const [passwordShow, setPasswordShow] = useState(false);

  const passClick = () => {
    setPasswordShow(!passwordShow);
  };

  const FetchData = async (data) => {
    await axios.post(`${signInConfig}/login`, data).then((res) => {
      Notify(res.data.message);
    });
  };

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setLogForm({ ...logForm, [name]: value });
  };


  const HandleSubmit = async (e) => {
    e.preventDefault();

    const isValid = await SignInSchema.isValid(logForm);

    if (isValid) {
      const data = FetchData(logForm);
    } else {
      toast.error("Inputed Validation Failed");
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
