import React from "react";
import { Colors, Label, Input, Image, Span } from "./ColorsDisplayStyle";

const ColorDisplay = (props) => {
  return (
    <Colors>
      <Input type="radio" id={props.id} name="color" />
      <Label onClick={props.onClick}>
        <Span id={props.id}></Span>
      </Label>
      <Image>
        <img src={props.img} alt={props.id} />
      </Image>
    </Colors>
  );
};
export default ColorDisplay;
