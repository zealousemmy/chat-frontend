import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import BlueBackground from "../../asset/images/bluebackground.svg";
import { SignIArray } from "../../util/SignIn/Nav";
import Form from "../../universal-components/Form";
import { FcGoogle } from "react-icons/fc";
import SignInArray from "../../util/SignIn/Body";
import NavArrayFooter from "../../util/SignUp/Footer";

const SignInComponent = ({ theme: { Color } }) => {
  return (
    <BodyDiv Color={Color} Bg={BlueBackground} sign={"signin"}>
      <Nav NavArrayContent={SignIArray} navroter={"from-signin-header"} />
      <div className={"sign"}>
        <div className={"signbody"}>
          <div className={"signheader"}>
            <h2>Sign In your account</h2>
            <p>
              Kindly input your details to successfuly sign up as a new user in
              Abolle
            </p>
          </div>
          <div>
            <Form FormArray={SignInArray} sign={"signin"} />
          </div>
          <div className={"signfotter"}>
            <div>
              <FcGoogle />
              <p>Sign in with Google</p>
            </div>
          </div>
        </div>
      </div>
      <Nav NavArrayContent={NavArrayFooter} navroter={"from-signin-footer"} />
    </BodyDiv>
  );
};

export default withTheme(SignInComponent);
