import React from "react";
import FollowItem from "../FollowItem/FollowItem";
import { Div, H4, Button, Followw, Border } from "./FollowStyle";

import user from "../../img/Viper_icon.webp";
import user2 from "../../img/Reyna_icon.webp";
import user3 from "../../img/Neon_icon.webp";

const Follow = () => {
  return (
    <Followw>
      <Div>
        <Div primary="true">
          <H4>Who to follow</H4>
        </Div>

        <Border />

        <FollowItem userImage={user} at={"@Viper_valorant"} name={"viper"} />
        <FollowItem userImage={user2} at={"@Reyna_valorant"} name={"reyna"} />
        <FollowItem userImage={user3} at={"@Neon_valorant"} name={"neon"} />
        <Button>Show more</Button>
      </Div>
    </Followw>
  );
};
export default Follow;
