import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import Form from "../../universal-components/Form";
import Nav from "../../universal-components/Nav";
import SignUpArray from "../../util/SignUp/Body";
import { SignArray } from "../../util/SignUp/Nav";
import BlueBackground from "../../asset/images/bluebackground.svg";
import NavArrayFooter from "../../util/SignUp/Footer";
import { useState } from "react";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { SignUpSchema } from "../../Authentication/schema";
import axios from "axios";
import { config } from "../../config";

const SignUpComponent = ({ theme: { Color } }) => {
  const [logForm, setLogForm] = useState({});
  const [passwordShow, setPasswordShow] = useState(false);

  const PostData = async (data) => {
    await axios.post(`${config}/create`, data).then((res) => {
      notify(res.data.message);
    });
  };

  const passClick = () => {
    setPasswordShow(!passwordShow);
  };

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setLogForm({ ...logForm, [name]: value });
  };

  const notify = (value) => {
    toast(value, {
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const isValid = await SignUpSchema.isValid(logForm);

    if (isValid) {
      PostData(logForm);
    } else {
      toast.error("Inputed Validation Failed");
    }
  };

  return (
    <BodyDiv Color={Color} Bg={BlueBackground}>
      <Nav NavArrayContent={SignArray} navrouter={"from-signup-footer"} />
      <ToastContainer transition={Zoom} draggable={false} />
      <div className={"sign"}>
        <div className={"signmain"}>
          <div className={"signmainbody"}>
            <div className={"signbody"}>
              <div className={"signheader"}>
                <h2>Create your account</h2>
                <p>Kindly input your details to successfuly sign into Abolle</p>
              </div>
              <div>
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
