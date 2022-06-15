import Image from "next/image";
import { withTheme } from "styled-components";
import { NotificationStyles } from "./notificationbox.style";

const NotificationBox = ({ theme: { Color }, NotificationArray }) => {
  return (
    <NotificationStyles Color={Color}>
      <div className={"notification-header"}>
        <h4>All your recent notifications will appear here</h4>
      </div>
      <div className={"notification-all"}>
        {NotificationArray.map((item, key) => (
          <div key={key}>
            {item.section.map((item, key) => (
              <div key={key} className={"notification"}>
                <div className={"notification-body"}>
                  <div className={"notification-image"}>
                    {item.notification_Image && <item.notification_Image />}
                  </div>
                  <div className={"notification-text"}>
                    <p>{item.notification_text}</p>
                  </div>
                  <div className={"notification_interval"}>
                    <p>{item.notification_time}</p>
                    <div className={"icons"}>
                      {item.notification_icon?.map((item, key) => (
                        <div key={key}>
                          <Image src={item.icon} alt={"notification icon"} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </NotificationStyles>
  );
};

export default withTheme(NotificationBox);
