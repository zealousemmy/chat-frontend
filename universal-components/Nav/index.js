import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { withTheme } from "styled-components";
import { NavDiv } from "./nav-style";

const Nav = ({
  NavArrayContent,
  theme: { Color },
  navrouter,
  signbottom,
  page,
  sidebar,
  IconClick,
}) => {
  const router = useRouter();

  return (
    <NavDiv
      Color={Color}
      navrouter={navrouter}
      signbottom={signbottom}
      page={page}
      sidebar={sidebar}
    >
      {NavArrayContent.map((item, key) => (
        <div key={key} className={`${item.classname}`}>
          {item.section.map((item, key) => (
            <div key={key} className={`${item.classbody}`}>
              {item.image ? (
                <div className={`${item.classname}`}>
                  <Link href={`${item.link}`}>
                    <a>
                      <Image
                        src={item.image}
                        alt={item.text}
                        className={"navlogo"}
                      />
                      <div className={`${item.classtext}`}>
                        <h4>{item.text_logo}</h4>
                      </div>
                    </a>
                  </Link>
                </div>
              ) : item.button ? (
                <div className={`${item.classname}`}>
                  <button className={`${item.classnameitem}`}>
                    {item.button_text} <p>+</p>
                  </button>
                </div>
              ) : item.linkButton ? (
                <div className={`${item.classname}`}>
                  <button className={`${item.classnameitem}`}>
                    <div>
                      <item.icon className={`${item.link_image}`} />
                    </div>
                  </button>
                </div>
              ) : item.component ? (
                <div className={`${item.classname}`} onClick={IconClick}>
                  <item.component
                    placeholder={item.placeholder}
                    className={`${item.classnameitem}`}
                  />
                </div>
              ) : (
                item.link && (
                  <div className={`${item.classname}`}>
                    <div className={`${item.classnameitemD}`}>
                      {item.link_description && <p>{item.link_description}</p>}
                    </div>
                    <Link href={item.link}>
                      <a>
                        <div
                          className={`${
                            router.asPath === item.link && "active"
                          } ${item.classnameitem}`}
                        >
                          {item.icon && (
                            <div className={item.link_image}>
                              <item.icon className={item.link_imageitem} />
                            </div>
                          )}
                          <h4>{item.link_text}</h4>
                        </div>
                      </a>
                    </Link>
                  </div>
                )
              )}
              <div className={`${item.classtext}`}>
                {item.text && <h4>{item.text}</h4>}
              </div>
            </div>
          ))}
        </div>
      ))}
    </NavDiv>
  );
};

export default withTheme(Nav);
