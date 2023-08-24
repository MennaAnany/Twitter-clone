import React from "react";
import Follow from "../Follow/Follow";
import { Recommended, P } from "./SuggestedStyle";

const Suggested = () => {
  return (
    <Recommended>
      <Follow />
      <div>
        <P
          style={{
            marginLeft: "2rem",
          }}
        >
          &copy; 2023 by menna anany
        </P>
      </div>
    </Recommended>
  );
};

export default Suggested;
