import Link from "next/link";
import { useRouter } from "next/router";
import { withTheme } from "styled-components";
import { SubNavStyle } from "./subnav.style";
const SubNav = ({ theme: { Color }, SubNavArray, nav, page,channelPostId }) => {
  const router = useRouter();
  return (
    <SubNavStyle Color={Color} nav={nav} page={page}>
      {SubNavArray.map((item, key) => (
        <div key={key}>
          {item.section.map((item, key) => (
            <div key={key} className={"linkbody"}>
              {item.link ? (
                <Link href={item.link === '/dashboard/mychannel' ? `${item.link}?q${channelPostId}`:item.link}>
                  <a>
                    <div
                      className={`${router.pathname === item.link  && "active"}`}
                    >
                      {item.link_text}
                    </div>
                  </a>
                </Link>
              ) : (
                item.component && (
                  <div>
                    <item.component />
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      ))}
    </SubNavStyle>
  );
};

export default withTheme(SubNav);
