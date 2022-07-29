import Image from "next/image";
import { withTheme } from "styled-components";
import { ChannelPostHeroSectionStyled } from "./herosection.style";
import { BsPencilSquare } from "react-icons/bs";

const ChannelPostHeroSection = ({
  theme: { Color },
  PostPics,
  title,
  description,
  postCount,
  membersCount,
}) => {
  return (
    <ChannelPostHeroSectionStyled Color={Color}>
      <div className={"postsheader"}>
        {PostPics ? (
          <div className={"postsheaderimage"}>
            <Image
              src={PostPics}
              alt={"post pics"}
              className={"postImages"}
              priority={true}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ) : (
          <div className={"posthero"}></div>
        )}
      </div>
      <div className={"postbody"}>
        <h2>{title}</h2>
        <p>{description}</p>
        {PostPics && (
          <div className={"postbody-content"}>
            <div className={"postbody-item"}>
              <h3>{membersCount}</h3>
              <p>Members</p>
            </div>
            <div className={"postbody-item"}>
              <h3>{postCount}</h3>
              <p>Posts</p>
            </div>
          </div>
        )}
      </div>
    </ChannelPostHeroSectionStyled>
  );
};

export default withTheme(ChannelPostHeroSection);
