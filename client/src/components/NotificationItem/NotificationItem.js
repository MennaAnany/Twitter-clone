import React from "react";
import {
  NotificationItemsLeft,
  Heart,
  Notification,
  NotificationItemsRight,
  Image,
  Title,
  Border,
  Div,
  P,
  Span,
  Spann,
} from "./NotificationItemStyle";

export const NotificationItem = (props) => {
  return (
    <React.Fragment>
      <Div>
        <NotificationItemsLeft>
          {props.icon === "heart" ? <Heart /> : <Notification />}
        </NotificationItemsLeft>
        <div>
          <NotificationItemsRight>
            <Image>
              <img src={props.src} alt="user" />
            </Image>
          </NotificationItemsRight>
          <Title>
            <P>
              {props.title}
              <Span>{props.handle}</Span>
            </P>
          </Title>
          {props.children && (
            <P>
              <Spann>{props.children}</Spann>
            </P>
          )}
        </div>
      </Div>
      <Border />
    </React.Fragment>
  );
};
