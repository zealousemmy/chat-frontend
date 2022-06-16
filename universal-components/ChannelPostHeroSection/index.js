import Image from "next/image";
import { withTheme } from "styled-components";
import { ChannelPostHeroSectionStyled } from "./herosection.style";

const ChannelPostHeroSection = ({
  theme: { Color },
  PostPics,
  title,
  description,
}) => {
  return (
    <ChannelPostHeroSectionStyled Color={Color}>
      <div className={"postsheader"}>
        {PostPics ? (
          <Image
            src={PostPics}
            alt={"post pics"}
            width={"824px"}
            height={"184px"}
            className={"postImages"}
          />
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
              <h3>190</h3>
              <p>Members</p>
            </div>
            <div className={"postbody-item"}>
              <h3>33</h3>
              <p>Posts</p>
            </div>
          </div>
        )}
      </div>
    </ChannelPostHeroSectionStyled>
  );
};

export default withTheme(ChannelPostHeroSection);
