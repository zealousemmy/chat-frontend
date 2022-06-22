import Image from "next/image";
import { withTheme } from "styled-components";
import { ManagedChannelStyles } from "./managechannel.style";

const ManagedChannels = ({ ManageChannelArray, theme: { Color } }) => {
  console.log(ManageChannelArray && ManageChannelArray,"ddddd")
  return (
    <ManagedChannelStyles Color={Color}>
      {ManageChannelArray?.map((item, key) => (
        <div key={key} className={"channelbody"}>
          <div className={"channelfirstlayout"}>
            <div className={"channelfirstlayoutimage"}>
              {/*<Image*/}
              {/*  src={item?.channel_img}*/}
              {/*  alt={"channel pics"}*/}
              {/*  width={"87px"}*/}
              {/*  height={"67px"}*/}
              {/*/>*/}
            </div>
            <div className={"channelheadsection"}>
              <h3>{item?.title}</h3>
              <div className={"channelcontent"}>
                <div className={"channel-subscriber"}>
                  <p>{item?.subscriber_num}</p>
                  <p>{item?.subscriber}</p>
                </div>
                <div className={"channel-post"}>
                  <p>{item?.post_num}</p>
                  <p>{item?.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={"channel-notification"}>
            {/*<item.icon />*/}
          </div>
        </div>
      ))}
    </ManagedChannelStyles>
  );
};

export default withTheme(ManagedChannels);
