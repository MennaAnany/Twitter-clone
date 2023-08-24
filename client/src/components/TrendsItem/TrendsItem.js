import React from "react";
import {
  Div,
  P,
  TrendsItemm,
  Border,
  TrendsItemHeader,
  Svg,
  Text,
} from "./TrendsItemStyle";

const TrendsItem = (props) => {
  return (
    <React.Fragment>
      <TrendsItemm>
        <TrendsItemHeader>
          <P secondry="true">{props.header}</P>
          <Div header="true">
            <Svg size={15.5} />
          </Div>
        </TrendsItemHeader>
        <Text>
          <P>{props.text}</P>
        </Text>
        <div style={{ marginBottom: "0.5rem" }}>
          <P secondry="true">{props.numbers}</P>
        </div>
      </TrendsItemm>
      <Border />
    </React.Fragment>
  );
};

export default TrendsItem;
