import React from "react";
import {
  TweetDisplayy,
  Image,
  Info,
  Text,
  Span,
  H4,
  P,
} from "./TweetDisplayStyle";

const TweetDisplay = (props) => {
  return (
    <TweetDisplayy>
      <Image>
        <img src={props.userimg} alt="preview" />
      </Image>
      <div>
        <Info>
          <H4>
            {props.name}
            <Span>@{props.handle}</Span>
          </H4>
        </Info>
        <Text>
          <P>{props.children}</P>
        </Text>
      </div>
    </TweetDisplayy>
  );
};
export default TweetDisplay;
