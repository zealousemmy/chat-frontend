import { MdNotifications } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { NotificationStyle } from "./notification.style";

const NotificationIcon = () => {
  return (
    <NotificationStyle>
      <MdNotifications className={"notification"} />
      <FaCircle className="circle" />
    </NotificationStyle>
  );
};

export default NotificationIcon;
