import Image from "next/image";
import { withTheme } from "styled-components";
import { ProfileDivStyle } from "./profile.style";

const ProfileDiv = ({ profile_image, profile_name, theme: { Color } }) => {
  return (
    <ProfileDivStyle Color={Color}>
      <div className={"profile-header"}>
        <h3>Profile</h3>
      </div>
      <div className={"profile-body"}>
        <div className={"background-blur"}></div>
        <div className={"profile-image"}>
          <Image src={profile_image} alt={"profile image"} />
        </div>
      </div>
      <div className={"profile-footer"}>
        <h5>{profile_name}</h5>
      </div>
    </ProfileDivStyle>
  );
};

export default withTheme(ProfileDiv);
