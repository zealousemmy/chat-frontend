import Link from "next/link";
import { useRouter } from "next/router";
import { withTheme } from "styled-components";
import { NavDropDownStyles } from "./navdropdown.style";

const NavDropDown = ({ theme: { Color }, dropdownitems }) => {
  const router = useRouter();
  return (
    <NavDropDownStyles Color={Color}>
      {dropdownitems.map((item, key) => (
        <div key={key} className={`${item.classbody}`}>
          {item.linkButton ? (
            <div className={`${item.classname}`}>
              <button onClick={item.action && item.action}>
                <div className={`${item.classnameitem}`}>
                  <item.icon className={`${item.link_image}`} />
                  <h4>{item.link_text}</h4>
                </div>
              </button>
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
                      className={`${router.asPath === item.link && "active"} ${
                        item.classnameitem
                      }`}
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
        </div>
      ))}
    </NavDropDownStyles>
  );
};

export default withTheme(NavDropDown);
