import Image from "next/image";
import { withTheme } from "styled-components";
import { NotificationStyles } from "./notificationbox.style";

const NotificationBox = ({ theme: { Color }, NotificationArray }) => {
  return (
    <NotificationStyles>
      {NotificationArray.map((item, key) => (
        <div key={key}>
          {item.section.map((item, key) => (
            <div key={key} className={"notification-body"}>
              <div>
                <h4>{item.title}</h4>
              </div>
              <div className={""}>
                <div>
                  <div>
                    {item.notification_Image && (
                      <Image
                        src={item.notification_Image}
                        alt={"notification image"}
                      />
                    )}
                  </div>
                  <div>
                    <p>{item.notification_text}</p>
                  </div>
                  <div>
                    <p>{item.notification_time}</p>
                    <div>
                      {item.notification_icon?.map((item, key) => (
                        <div key={key}>
                          <Image src={item.icon} alt={"notification icon"} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </NotificationStyles>
  );
  {
  }
};

export default withTheme(NotificationBox);
