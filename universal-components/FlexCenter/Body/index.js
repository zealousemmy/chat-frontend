import Image from "next/image";
import Link from "next/link";
import { withTheme } from "styled-components";
import { FlexCenterBodyStyles } from "./flexcenterbody";
import ProfilePic from "../../../asset/images/profile.png";
import { useState } from "react";
import DisLikes from "../../../asset/Icons/dislike.svg";
import Share from "../../../asset/Icons/share.svg";
import Likes from "../../../asset/Icons/like.svg";
import Comment from "../../../asset/Icons/message.svg";
import Comments from "../../Comments";
import FlexCenterSubHeader from "../../../universal-components/FlexCenter/SubHeader";

const FlexCenterBody = ({
  FlexBodyArray,
  theme: { Color },
  MessageBox,
  selectItem,
}) => {
  const [messageBox, setMessageBox] = useState(false);
  const [pic, setPic] = useState();

  const HandleComments = (key) => {
    setMessageBox(!messageBox);
    setPic(key);
  };

  return (
    <FlexCenterBodyStyles Color={Color}>
      {FlexBodyArray.map((item, keyMain) => (
        <div key={keyMain} className={`classsections`}>
          {item.section.map((item, key) => (
            <div key={key} className={`layoutbody`}>
              <div className={"layout"}>
                <div className={`namelayout`}>
                  <div className={`itemlayout`}>
                    <div className={`itemlayout1`}>
                      <Image
                        src={item.image}
                        alt={"profile pic"}
                        width={"40px"}
                        height={"40px"}
                        className={"profile-image"}
                      />
                    </div>
                    <div className={`itemlayout11`}>
                      <h2>{item.profile_name}</h2>
                      <div className={`itemlayout111`}>
                        <div>
                          <p>{item.channel_0f_post}</p>
                        </div>
                        <div>
                          <p>{item.Region_of_post}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${item.classitemlayouttime} ${item.classicon}`}
                  >
                    {item.time_of_post ? (
                      <h3>{item.time_of_post}</h3>
                    ) : (
                      item.post_icon && <item.post_icon className={"icons"} />
                    )}
                  </div>
                </div>
                <div className={`namelayout2`}>
                  <div className={`itemlayout2`}>
                    <p>{item.post_content}</p>
                  </div>
                  <div className={`itemlayout21`}>
                    <Link href={""}>
                      <a>{item.view_post}</a>
                    </Link>
                  </div>
                </div>
                <div className={`namelayout3`}>
                  <div className={`itemlayout3`}>
                    <Image
                      src={item.view_pic}
                      alt={"Posted Pic"}
                      // height={"329px"}
                    />
                  </div>
                </div>
                <div className={`namelayout4`}>
                  <div className={`itemlayout4`}>
                    <div className={`itemlayout40`}>
                      <div className={`itemlayout401`}>
                        <Image
                          src={Likes}
                          alt={"likes"}
                          width={"15px"}
                          height={"15px"}
                        />
                      </div>
                      <div className={`itemlayout402`}>
                        <p>{item.post_likes_num}</p>
                      </div>
                    </div>

                    <div className={`itemlayout40`}>
                      <div className={`itemlayout401`}>
                        <Image
                          src={DisLikes}
                          alt={"dislikes"}
                          width={"15px"}
                          height={"15px"}
                        />
                      </div>
                      <div className={`itemlayout402`}>
                        <p>{item.post_dislikes_num}</p>
                      </div>
                    </div>

                    <div className={`itemlayout40`}>
                      <div
                        className={`itemlayout401`}
                        onClick={() => HandleComments(keyMain)}
                      >
                        <Image
                          src={Comment}
                          alt={"comments"}
                          width={"15px"}
                          height={"15px"}
                        />
                      </div>
                      <div className={`itemlayout402`}>
                        <p>{item.post_comment_num}</p>
                      </div>
                    </div>
                  </div>

                  <div className={`itemlayout41`}>
                    <div className={`itemlayout411`}>
                      <div className={`itemlayout4111`}>
                        <Image
                          src={Share}
                          alt={"Share"}
                          width={"15px"}
                          height={"15px"}
                        />
                      </div>
                      <div className={`itemlayout4112`}>
                        <p>{item.share_post_text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* {!item.comments ? (
                messageBox &&
                keyMain === pic &&
                MessageBox && (
                  <div>
                    <MessageBox ProfilePics={ProfilePic} />
                  </div>
                )
              ) : (
                <div>
                  <div>
                    <MessageBox ProfilePics={ProfilePic} />
                  </div>
                  <FlexCenterSubHeader
                    details={"most relevant"}
                    selectItem={selectItem}
                    width={"70%"}
                  />
                  {item.comments.map((item, key) => (
                    <Comments key={key} Comments={item} />
                  ))}

                  <div className={"see-more-comments"}>
                    <button>See more</button>
                  </div>
                </div>
              )} */}
            </div>
          ))}
        </div>
      ))}
    </FlexCenterBodyStyles>
  );
};

export default withTheme(FlexCenterBody);
