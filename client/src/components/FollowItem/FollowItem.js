import React from "react";
import { Div, P, Button, Image, Btn, Border, Span } from "./FollowItemStyle";

const FollowItem = (props) => {
  return (
    <div>
      <Div header="true">
        <div>
          <span>
            <Image alt="user" src={props.userImage} />
          </span>
        </div>
        <Span style={{ width: "100%" }}>
          <P>{props.name}</P>
          <P secondry="true">{props.at}</P>
        </Span>
        <Button>Follow</Button>
      </Div>
      <Border />
    </div>
  );
};

export default FollowItem;
