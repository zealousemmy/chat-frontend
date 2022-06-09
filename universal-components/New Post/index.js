import { withTheme } from "styled-components";
import { NewPostStyles } from "./newpost.style";
import ImageView from "../../asset/images/profile.png";
import PhotoIcon from "../../asset/Icons/image_black.svg";
import ChannelIcon from "../../asset/Icons/channel.svg";
import VideoIcon from "../../asset/Icons/videocam_black.svg";
import QuestionIcon from "../../asset/Icons/Vector_question.svg";
import PenIcon from "../../asset/Icons/pen-add.svg";
import FlexCenterSubHeader from "../FlexCenter/SubHeader";
import Image from "next/image";
import DropDown from "../DropDown";

const NewPost = ({ theme: { Color } }) => {
  return (
    <NewPostStyles Color={Color}>
      <div className={"newpostheader"}>
        <div className={"newpostheaderimage"}>
          <Image
            src={ImageView}
            alt="Profile Image"
            width={"40px"}
            height={"40px"}
          />
        </div>
        <div className="newpostheadertext">
          <div className="newpostheadertextimage">
            <Image src={PenIcon} alt={"want to post icon"} />
          </div>
          <p>What do you want to post?</p>
        </div>
      </div>
      <div className={"newpostbody"}>
        <div className={"newpostbodycontent"}>
          <div className={"newpostbodycontentimage"}>
            <Image
              src={PhotoIcon}
              alt={"Photo icon"}
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className={"newpostbodycontenttext"}>
            <p>Photo</p>
          </div>
        </div>
        <div className={"newpostbodycontent"}>
          <div className={"newpostbodycontentimage"}>
            <Image src={VideoIcon} alt={"Photo icon"} />
          </div>
          <div className={"newpostbodycontenttext"}>
            <p>Video</p>
          </div>
        </div>
        <div className={"newpostbodycontent"}>
          <div className={"newpostbodycontentimage"}>
            <Image src={QuestionIcon} alt={"Photo icon"} />
          </div>
          <div className={"newpostbodycontenttext"}>
            <p>Ask a Question</p>
          </div>
        </div>
        <div className={"newpostbodycontent"}>
          <div className={"newpostbodycontentimage"}>
            <Image src={ChannelIcon} alt={"Photo icon"} />
          </div>
          <div className={"newpostbodycontenttext"}>
            <DropDown details={"Select channel"} />
          </div>
        </div>
      </div>
    </NewPostStyles>
  );
};

export default withTheme(NewPost);
