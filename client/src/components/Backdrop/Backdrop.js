import React from "react";
import styled from "styled-components";

const Backdrop = (props) => {
  const Backdrop = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `;
  return (
    <Backdrop
      style={{ backgroundColor: `${props.bgColor}` }}
      onClick={props.clicked}
    ></Backdrop>
  );
};

export default Backdrop;
