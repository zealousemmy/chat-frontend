import Image from "next/image";
import Link from "next/link";
import { withTheme } from "styled-components";
import { NavDiv } from "./nav-style";

const Nav = ({ NavArrayContent, theme: { Color }, navroter }) => {
  return (
    <NavDiv Color={Color} navroter={navroter}>
      {NavArrayContent.map((item, key) => (
        <div key={key} className={`${item.classname}`}>
          {item.section.map((item, key) => (
            <div key={key} className={`${item.classbody}`}>
              {item.image ? (
                <div className={`${item.classname}`}>
                  <Image src={item.image} alt={item.text} />
                </div>
              ) : item.component ? (
                <div className={`${item.classname}`}>
                  <item.component placeholder={item.placeholder} />
                </div>
              ) : (
                item.link && (
                  <div className={`${item.classname}`}>
                    <div className={`${item.classnameitemD}`}>
                      <p>{item.link_description}</p>
                    </div>
                    <Link href={item.link}>
                      <a>
                        <div className={`${item.classnameitem}`}>
                          {item.icon && (
                            <div>
                              <Image src={item.icon} alt={item.link} />
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
                <h4>{item.text}</h4>
              </div>
            </div>
          ))}
        </div>
      ))}
    </NavDiv>
  );
};

export default withTheme(Nav);
