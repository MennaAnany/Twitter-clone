import React from "react";
import { FiSettings } from "react-icons/fi";
import { NotificationItem } from "../../components/NotificationItem/NotificationItem";
import user from "../../img/Viper_icon.webp";
import user2 from "../../img/Reyna_icon.webp";
import user3 from "../../img/Neon_icon.webp";
import {
  Notificationss,
  Icon,
  Border,
  H4,
  Div,
  DivHeader,
} from "./NotificationsStyle";
import { Grid } from "@mui/material";

const Notifications = () => {
  return (
    <Grid>
      <Grid>
        <Notificationss>
          <DivHeader>
            <H4>Notifications</H4>
            <Div>
              <Icon>
                <FiSettings />
              </Icon>
            </Div>
          </DivHeader>
          <Border />
          <div>
            <NotificationItem
              title={"Recent Tweet from "}
              handle={"Viper_valorant"}
              src={user}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus repellat, ipsum sed neque aliquam tempora hic
              voluptatibus
            </NotificationItem>
            <NotificationItem
              title={"your tweet is liked by "}
              handle={"Reyna_valorant"}
              src={user2}
              icon="heart"
            />
            <NotificationItem
              title={"your tweet is liked by "}
              handle={"Neon_valorant"}
              src={user3}
              icon="heart"
            />

            <NotificationItem
              title={"Recent Tweet by "}
              handle={"Viper_valorant"}
              src={user}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus repellat, ipsum sed neque aliquam tempora hic
              voluptatibus magni eos similiqu
            </NotificationItem>
            <NotificationItem
              title={"your tweet is liked by "}
              handle={"Reyna_valorant"}
              src={user2}
              icon="heart"
            >
              Lorem, ipsum dolor sit amet consectetur ,
            </NotificationItem>
            <NotificationItem
              title={"your tweet is liked by "}
              handle={"Neon_valorant"}
              src={user3}
              icon="heart"
            />
            <NotificationItem
              title={"Recent Tweet by "}
              handle={"Reyna_valorant"}
              src={user2}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus repellat, ipsum sed neque aliquam tempora hic
              voluptatibus magni eos similique blanditiis
            </NotificationItem>
            <NotificationItem
              title={"your tweet is liked by "}
              handle={"Reyna_valorant"}
              src={user2}
              icon="heart"
            />
            <NotificationItem
              title={"Recent Tweet by "}
              handle={"Neon_valorant"}
              src={user3}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus repellat, ipsum sed
            </NotificationItem>
            <NotificationItem
              title={"Recent Tweet by "}
              handle={"Viper_valorant"}
              src={user}
            >
              tempora hic voluptatibus magni eos similique blanditiis
            </NotificationItem>
            <NotificationItem
              title={"your tweet is liked by "}
              handle={"Neon_valorant"}
              src={user3}
              icon="heart"
            >
              Lorem, ipsum dolor sit amet consectetur ,
            </NotificationItem>
          </div>
        </Notificationss>
      </Grid>
    </Grid>
  );
};
export default Notifications;
