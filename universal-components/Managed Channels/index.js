import Image from "next/image";
import { withTheme } from "styled-components";
import { ManagedChannelStyles } from "./managechannel.style";
import NotificationIcon from "../../Mono-Component/notification";
import defaultImage from "../../asset/images/papper1.png"
import {EncryptData} from "../../util/dataSecurity";
import {useUser} from "../../util/store/userContext";
import {useRouter} from "next/router";
import {useCallback} from "react";
const ManagedChannels = ({ManageChannelArray, theme: { Color } }) => {
  const {cacheChannelId} = useUser()
  const router = useRouter()

  const Navigate=useCallback((id)=>{
    cacheChannelId(id)
    router?.push(`/dashboard/mychannel?q=${id}`)
  },[])
  return (
    <ManagedChannelStyles Color={Color}>
      {!ManageChannelArray.length ? (
<div className="no-data"><p>You Currently Do Not Have Channel(s) You Manage</p></div>
      ): ManageChannelArray?.map((item, key) => (
        <div key={key} className={"channelbody"} onClick={()=>Navigate(item.id)}>
          <div className={"channelfirstlayout"}>
            <div className={"channelfirstlayoutimage"}>
              <Image
                src={item?.channel_img || defaultImage}
                // src={item?.channel_img}
                alt={"channel pics"}
                width={"87px"}
                height={"67px"}
                priority={true}
              />
            </div>
            <div className={"channelheadsection"}>
              <h3>{item?.title}</h3>
              <div className={"channelcontent"}>
                <div className={"channel-subscriber"}>
                  <p>{item.total_channel_subscribers_count || 0}</p>
                  <p>subscriber(s)</p>
                </div>
                <div className={"channel-post"}>
                  <p>{item?.post_count_count || 0}</p>
                  <p>post(s)</p>
                </div>
              </div>
            </div>
          </div>
          <div className={"channel-notification"}>
            <NotificationIcon />
          </div>
        </div>
        ))}
    </ManagedChannelStyles>
  );
};

export default withTheme(ManagedChannels);
