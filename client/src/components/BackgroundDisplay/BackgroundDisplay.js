import React from "react";
import { Background, Name, Input, Label } from "./BackgroundDisplayStyle";

const BackgroundDisplay = (props) => {
  return (
    <Background>
      <Input type="radio" id={props.id} name="background"></Input>
      <Label id={props.id} onClick={props.onClick}>
        <Name>{props.name}</Name>
      </Label>
    </Background>
  );
};
export default BackgroundDisplay;
