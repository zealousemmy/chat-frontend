import Image from "next/image";
import { MessageStyle } from "./sendmessage.styles";
import Photo from "../../asset/Icons/image_black.svg";
import { withTheme } from "styled-components";

const SendMessage = ({ theme: { Color }, ProfilePics }) => {
  return (
    <MessageStyle Color={Color}>
      <div className={"profile-pics"}>
        <Image
          src={ProfilePics}
          alt={"profile pics"}
          width={"56px"}
          height={"56px"}
        />
      </div>
      <div className={"message-details"}>
        <div className={"message-details-input"}>
          <input
            type={"text"}
            placeholder={"Add your comment here....."}
            name={"message"}
          />
        </div>
        <div className={"message-details-pics"}>
          <Image src={Photo} alt={"Post Pics"} />
        </div>
        <div className={"message-details-button"}>
          <button>Add comment</button>
        </div>
      </div>
    </MessageStyle>
  );
};

export default withTheme(SendMessage);