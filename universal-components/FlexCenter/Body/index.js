import Image from "next/image";
import Link from "next/link";
import { withTheme } from "styled-components";
import { FlexCenterBodyStyles } from "./flexcenterbody";

const FlexCenterBody = ({ FlexBodyArray, theme: { Color } }) => {
  return (
    <FlexCenterBodyStyles Color={Color}>
      {FlexBodyArray.map((item, key) => (
        <div key={key} className={`${item.classname}`}>
          {item.section.map((item, key) => (
            <div key={key} className={`${item.classbody}`}>
              <div className={`${item.classnamelayout}`}>
                <div className={`${item.classitemlayout}`}>
                  <div className={`${item.classitemlayout1}`}>
                    <Image src={item.image} alt={"profile pic"} />
                  </div>
                  <div className={`${item.classitemlayout11}`}>
                    <h2>{item.profile_name}</h2>
                    <div className={`${item.classitemlayout111}`}>
                      <div>
                        <p>{item.channel_0f_post}</p>
                      </div>
                      <div>
                        <p>{item.Region_of_post}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${item.classitemlayouttime}`}>
                  <h3>{item.time_of_post}</h3>
                </div>
              </div>
              <div className={`${item.classnamelayout2}`}>
                <div className={`${item.classitemlayout2}`}>
                  <p>{item.post_content}</p>
                </div>
                <div className={`${item.classitemlayout21}`}>
                  <Link href={""}>
                    <a>{item.view_post}</a>
                  </Link>
                </div>
              </div>
              <div className={`${item.classnamelayout3}`}>
                <div className={`${item.classitemlayout3}`}>
                  <Image src={item.view_pic} alt={"Posted Pic"} />
                </div>
              </div>
              <div className={`${item.classnamelayout4}`}>
                <div className={`${item.classitemlayout4}`}>
                  <div className={`${item.classitemlayout40}`}>
                    <div className={`${item.classitemlayout401}`}>
                      <Image src={item.post_likes} alt={"likes"} />
                    </div>
                    <div className={`${item.classitemlayout402}`}>
                      <p>{item.post_likes_num}</p>
                    </div>
                  </div>

                  <div className={`${item.classitemlayout40}`}>
                    <div className={`${item.classitemlayout401}`}>
                      <Image src={item.post_dislikes} alt={"dislikes"} />
                    </div>
                    <div className={`${item.classitemlayout402}`}>
                      <p>{item.post_dislikes_num}</p>
                    </div>
                  </div>

                  <div className={`${item.classitemlayout40}`}>
                    <div className={`${item.classitemlayout401}`}>
                      <Image src={item.post_comment} alt={"comments"} />
                    </div>
                    <div className={`${item.classitemlayout402}`}>
                      <p>{item.post_comment_num}</p>
                    </div>
                  </div>
                </div>

                <div className={`${item.classitemlayout41}`}>
                  <div className={`${item.classitemlayout411}`}>
                    <div className={`${item.classitemlayout4111}`}>
                      <Image src={item.share_post} alt={"Share"} />
                    </div>
                    <div className={`${item.classitemlayout4112}`}>
                      <p>{item.share_post_text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </FlexCenterBodyStyles>
  );
};

export default withTheme(FlexCenterBody);
