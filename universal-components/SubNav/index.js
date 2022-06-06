import Link from "next/link";
import { useRouter } from "next/router";
import { withTheme } from "styled-components";
import { SubNavStyle } from "./subnav.style";

const SubNav = ({ theme: { Color }, SubNavArray }) => {
  return (
    <SubNavStyle Color={Color}>
      {SubNavArray.map((item, key) => (
        <div key={key} className={"linkbody"}>
          <Link href={item.link}>
            <a>
              <div>{item.link_text}</div>
            </a>
          </Link>
        </div>
      ))}
    </SubNavStyle>
  );
};

export default withTheme(SubNav);
