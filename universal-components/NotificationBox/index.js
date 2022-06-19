import Image from "next/image";
import { withTheme } from "styled-components";
import { NotificationStyles, ImageContainer } from "./notificationbox.style";

const NotificationBox = ({ theme: { Color }, NotificationArray }) => {
  return (
    <NotificationStyles
      Color={Color}
      // model={NotificationArray.section.notification_Image}
    >
      <div className={"notification-header"}>
        <h4>All your recent notifications will appear here</h4>
      </div>
      <div className={"notification-all"}>
        {NotificationArray.map((item, key) => (
          <div key={key}>
            {item.section.map((item, key) => (
              <div key={key} className={"notification"}>
                <div className={"notification-body"}>
                  <ImageContainer Color={Color} model={item.notification_Image}>
                    {item.notification_Image && (
                      <item.notification_Image className={"notified-image"} />
                    )}
                  </ImageContainer>
                  <div className={"notification-text"}>
                    <p>{item.notification_text}</p>
                  </div>
                  <div className={"notification_interval"}>
                    <p>{item.notification_time}</p>
                    <div className={"icons"}>
                      {item.notification_icon?.map((item, key) => (
                        <div key={key} className={"icon-body"}>
                          <item.icon className={"icon-item"} />
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
