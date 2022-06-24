import Image from "next/image";
import { withTheme } from "styled-components";
import ArrowKey from "../../asset/Icons/arrow-right.svg";
import { FlexRightStyle } from "./flexright.style";
import Link from "next/link"
import {useRouter} from "next/router";
import {useCallback} from "react";
const FlexRightBody = ({ FlexRightArray, theme: { Color } }) => {
  const router = useRouter()
  const Navigate=useCallback((id) => router.push(`/dashboard/channelpost/?q=${id}`),[])

  return (
    <FlexRightStyle Color={Color}>
      {FlexRightArray.map((item, key) => (
        <div key={key} className={"firstflexleft"}>
          {/*{item.map((item, key) => (*/}
            <div key={key} className={`${item.classbody}`}>
              <div className={`${item.classnamefirst}`}>
                <h3 className={`${item.classitemfirst}`}>{item.title}</h3>
                <h4>{item.subtitle}</h4>
              </div>
              <div className={`${item.classnamesecond}`}>
                <div className={`${item.bodytextclass}`}>
                  <p>{item.body_text}</p>
                </div>
                {item.channelsTrend?.map((item, key) => (
                  <Link href={`/dashboard/channelpost?q=${item.channel_id}`}  key={key} className={`channelflextleftclass`}>
                   <a className={`channelflextleftclass`}><h4>{item.name}</h4>
                    <div className={`channelflexleftitem`}>
                      <Image src={ArrowKey} alt={"Arrow-Key"} priority={true}/>
                    </div>
                   </a>
                  </Link>
                ))}
              </div>
              <div className={`${item.classtext}`} onClick={()=>Navigate(item.id)}>
                <button>{item.text}</button>
              </div>
            </div>
          {/*))}*/}
        </div>
      ))}
    </FlexRightStyle>
  );
};

export default withTheme(FlexRightBody);
