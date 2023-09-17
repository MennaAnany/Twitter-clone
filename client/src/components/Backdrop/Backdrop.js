import React from "react";
import { Backdropp } from "./BackdropStyle";

const Backdrop = (props) => {
  return (
    <Backdropp
      style={{ backgroundColor: `${props.bgColor}` }}
      onClick={props.clicked}
    ></Backdropp>
  );
};

export default Backdrop;
