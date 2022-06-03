import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import Form from "../../universal-components/Form";
import Nav from "../../universal-components/Nav";
import SignUpArray from "../../util/SignUp/Body";
import { SignArray } from "../../util/SignUp/Nav";
import BlueBackground from "../../asset/images/bluebackground.svg";
import { FcGoogle } from "react-icons/fc";
import NavArrayFooter from "../../util/SignUp/Footer";

const SignUpComponent = ({ theme: { Color } }) => {
  return (
    <BodyDiv Color={Color} Bg={BlueBackground}>
      <Nav NavArrayContent={SignArray} navroter={"from-signup-footer"} />
      <div className={"sign"}>
        <div className={"signbody"}>
          <div className={"signheader"}>
            <h2>Sign up to your account</h2>
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
      <Nav NavArrayContent={NavArrayFooter} navroter={"from-signup-footer"} />
    </BodyDiv>
  );
};

export default withTheme(SignUpComponent);
