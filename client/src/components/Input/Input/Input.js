import React from "react";
import InputUser from "./InputStyle";

const Input = (props) => {
  return (
    <InputUser
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      ref={props.refrence}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      style={props.style}
    />
  );
};

export default Input;
