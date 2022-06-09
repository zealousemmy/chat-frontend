import Image from "next/image";
import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import ProfileImage from "../../asset/images/profile.png";
import PersonalInfo from "./personal-info";
import PasswordInfo from "./Password";
import EmailInfo from "./EmailChange";

const Settings = ({ theme: { Color } }) => {
  return (
    <BodyDiv Color={Color}>
      <Nav NavArrayContent={NavArrayDashboard} />
      <div className={"settings"}>
        <div className={"settingHeader"}>
          <div className={"settingHeaderfirst"}>
            <h4>Edit Profilt Settings</h4>
            <p>Make changes to your account info here</p>
          </div>
          <div className={"settingHeadersecond"}>
            <div className={"settingHeadersecondImage"}>
              <Image
                src={ProfileImage}
                alt={"Profile Image"}
                width="150px"
                height="150px"
              />
            </div>
            <button>change picture</button>
          </div>
        </div>
        <div className={"settingbody"}>
          <div className={"settingItem"}>
            <PersonalInfo />
          </div>
          <div className={"settingItem"}>
            <PasswordInfo />
          </div>
          <div className={"settingItem"}>
            <EmailInfo />
          </div>
        </div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(Settings);
