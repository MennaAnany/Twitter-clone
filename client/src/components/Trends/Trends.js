import React from "react";

import TrendsItem from "../TrendsItem/TrendsItem";
import { Border } from "./TrendsStyle";
import { Div, H4, Svg, DivButton, Button } from "./TrendsStyle";
const Trends = () => {
  return (
    <Div>
      <Div header="true">
        <H4>Trends for you</H4>
        <Svg />
      </Div>
      <Border />

      <TrendsItem
        header={"1.Trending"}
        text={"#VALORANT"}
        numbers={"325K Tweets"}
      />
      <TrendsItem
        header={"2.Trending"}
        text={"#LEAGUE OF LEGENDS"}
        numbers={"488K Tweets"}
      />
      <TrendsItem
        header={"3.Trending"}
        text={"#OVERWATCH"}
        numbers={"22.7K Tweets"}
      />
      <TrendsItem
        header={"4.Trending"}
        text={"#IT TAKES TWO"}
        numbers={"598 Tweets"}
      />
      <TrendsItem
        header={"5.Trending"}
        text={"#DETROIT BECOMES HUMAN"}
        numbers={"71K Tweets"}
      />

      <DivButton>
        <Button>Show more</Button>
      </DivButton>
    </Div>
  );
};
export default Trends;
