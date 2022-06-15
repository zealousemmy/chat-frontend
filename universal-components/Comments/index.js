import Image from "next/image";
import { withTheme } from "styled-components";
import { CommentStyles } from "./comment.styles";
import Likes from "../../asset/Icons/like.svg";
import Comment from "../../asset/Icons/message.svg";

Image;

const Comments = ({ theme: { Color }, Comments }) => {
  return (
    <CommentStyles Color={Color}>
      <div className={"profile-pics"}>
        <Image
          src={Comments.Commenter_ProPics}
          alt={"Commenter Profile Pics"}
          width={"56px"}
          height={"56px"}
          className={"image"}
        />
      </div>
      <div className={"comment-body"}>
        <div className={"comment-body-header"}>
          <h3>{Comments.Commenter_ProName}</h3>
          <p>{Comments.Commenter_Time}</p>
        </div>
        <div className={"comment-body-text"}>
          <p>{Comments.Commenter_Text}</p>
        </div>
        <div className={"comment-body-social"}>
          <div className={"comment-body-social-item"}>
            <div className={"comment-body-social-image"}>
              <Image
                src={Likes}
                alt={"Likes from commenters"}
                width={"15px"}
                height={"15px"}
              />
            </div>
            <p>{`${Comments.Commenter_Likes} Likes`}</p>
          </div>
          <div className={"comment-body-social-item"}>
            <p>{`${Comments.Commenter_Comments} Comments`}</p>
            <div className={"comment-body-social-image"}>
              <Image
                src={Comment}
                alt={"Comments from Commenters"}
                width={"15px"}
                height={"15px"}
              />
            </div>
          </div>
        </div>
      </div>
    </CommentStyles>
  );
};

export default withTheme(Comments);
