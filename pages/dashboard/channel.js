import React from "react";
import Channels from "../../components/Channels";
import {DecryptData, EncryptData} from "../../util/dataSecurity";
const Channel = () => {
  return (
    <div>
      <Channels />
    </div>
  );
};
Channel.auth = true
export default Channel;
