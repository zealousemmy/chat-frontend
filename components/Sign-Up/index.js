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
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { SignUpSchema } from "../../Authentication/schema";
import axios from "axios";
import { config } from "../../config";

const SignUpComponent = ({ theme: { Color } }) => {
  // toast.configure();
  const [logForm, setLogForm] = useState({});
  const [passwordShow, setPasswordShow] = useState(false);

  const PostData = async (data) => {
    await axios.post(`${config}/create`, data).then((res) => {
      console.log(res);
    });
  };

  const passClick = () => {
    setPasswordShow(!passwordShow);
    console.log(passwordShow);
  };

  const HandleChange = (e) => {
    const { name, value } = e.target;
    console.log([name, value]);
    setLogForm({ ...logForm, [name]: value });
  };

  const notify = (value) => {
    toast(value);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    console.log(logForm);
    const isValid = await SignUpSchema.isValid(logForm);

    toast(isValid);
    console.log(isValid);

    if (isValid) {
      PostData(logForm);
      // router.push("/signin");
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
              <div style={{ border: "1px solid red" }}>
                <Form
                  FormArray={SignUpArray}
                  HandleChange={HandleChange}
                  HandleSubmit={HandleSubmit}
                  passwordShow={passwordShow}
                  passClick={passClick}
                  width="364px"
                  sign={"signin"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nav
        NavArrayContent={NavArrayFooter}
        signbottom={"signbottom"}
        navrouter={"from-signup-footer"}
      />
    </BodyDiv>
  );
};

export default withTheme(SignUpComponent);
