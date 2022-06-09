import Image from "next/image";
import { withTheme } from "styled-components";
import { ChannelPostHeroSectionStyled } from "./herosection.style";

const ChannelPostHeroSection = ({ theme: { Color }, PostPics }) => {
  return (
    <ChannelPostHeroSectionStyled Color={Color}>
      <div className={"postsheader"}>
        <Image
          src={PostPics}
          alt={"post pics"}
          width={"824px"}
          height={"184px"}
          className={"postImages"}
        />
      </div>
      <div className={"postbody"}>
        <h2>Finding Help</h2>
        <p>Poticial conversations and gists that will spark your interest</p>
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
      </div>
    </ChannelPostHeroSectionStyled>
  );
};

export default withTheme(ChannelPostHeroSection);
