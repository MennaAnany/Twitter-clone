import React from "react";
import { Input, Div, SearchbarDiv, Form, Svg } from "./SearchbarStyle";

const Searchbar = () => {
  return (
    <SearchbarDiv>
      <Form>
        <Div>
          <Svg />
        </Div>
        <div>
          <Input placeholder="search twitter" type="text" />
        </div>
      </Form>
    </SearchbarDiv>
  );
};

export default Searchbar;
