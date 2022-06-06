import Image from "next/image";
import React from "react";
import { withTheme } from "styled-components";
import { FlexLeftStyle } from "./flex.style";
import ProfileDiv from "../profile";

const FlexLeftBody = ({ FlexLeftArray, theme: { Color } }) => {
  return (
    <FlexLeftStyle Color={Color}>
      {FlexLeftArray.map((item, key) => (
        <div key={key} className={`${item.classname}`}>
          {item.section.map((item, key) => (
            <div key={key} className={`${item.classbody}`}>
              {item.profile && (
                <div className={`${item.profileclassname}`}>
                  <ProfileDiv
                    profile_image={item.profile_image}
                    profile_name={item.profile_name}
                  />
                </div>
              )}
              <div className={`${item.classnamefirst}`}>
                <h3 className={`${item.classitemfirst}`}>
                  {item.title}
                  {item.num && `(${item.num})`}
                </h3>
              </div>
              <div className={`${item.classnamesubsecond}`}>
                <h3 className={`${item.classitemsubsecond}`}>
                  {item.subtitle}
                </h3>
              </div>
              <div className={`${item.classnamesecond}`}>
                {item.post
                  ? item.post.map((item, key) => (
                      <div key={key} className={`${item.classname}`}>
                        <p className={`${item.classitem}`}>{item.title}</p>
                        <p>{item.count}</p>
                      </div>
                    ))
                  : item.image && (
                      <div className={`${item.classitemsecond}`}>
                        <Image
                          src={item.image}
                          alt={item.imagetitle}
                          className={"image"}
                          width={"186px"}
                          height={"102px"}
                        />
                      </div>
                    )}
              </div>
              <div className={`${item.classnamethird}`}>
                <p className={`${item.classitemthird}`}>{item.footertitle}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </FlexLeftStyle>
  );
};

export default withTheme(FlexLeftBody);
