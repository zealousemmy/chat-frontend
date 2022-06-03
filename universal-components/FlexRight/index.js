import Image from "next/image";
import { withTheme } from "styled-components";
import ArrowKey from "../../asset/Icons/arrow-right.svg";
import { FlexRightStyle } from "./flexright.style";

const FlexRightBody = ({ FlexRightArray, theme: { Color } }) => {
  return (
    <FlexRightStyle Color={Color}>
      {FlexRightArray.map((item, key) => (
        <div key={key} className={`${item.classname}`}>
          {item.section.map((item, key) => (
            <div key={key} className={`${item.classbody}`}>
              <div className={`${item.classnamefirst}`}>
                <h3 className={`${item.classitemfirst}`}>{item.title}</h3>
                <h4>{item.subtitle}</h4>
              </div>
              <div className={`${item.classnamesecond}`}>
                {item.channels.map((item, key) => (
                  <div key={key} className={`${item.classname}`}>
                    <h4>{item.title}</h4>
                    <div className={`${item.classitem}`}>
                      <Image src={ArrowKey} alt={"Arrow-Key"} />
                    </div>
                  </div>
                ))}
              </div>
              <div className={`${item.classtext}`}>
                <button>{item.text}</button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </FlexRightStyle>
  );
};

export default withTheme(FlexRightBody);
