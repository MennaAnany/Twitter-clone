import React from "react";
import userImage from "../../img/Viper_icon.webp";
import {
  Header,
  Image,
  Name,
  Bio,
  Div,
  P,
  Button,
  Span,
  Footer,
} from "./TweetModalStyle";

const TweetModal = (props) => {
  return (
    <Div>
      <Header>
        <Image>
          <img src={userImage} alt="user" />
        </Image>
        <div>
          <Button>Follow</Button>
        </div>
      </Header>
      <Name>
        <div>
          <P primary>viper</P>
        </div>
        <div>
          <P>@Viper_valorant</P>
        </div>
      </Name>
      <Bio>
        <P primary>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem laudantim.
        </P>
      </Bio>
      <Footer>
        <div style={{ marginRight: "0.9rem" }}>
          <P primary style={{ fontWeight: "900" }}>
            <Span>850</Span> Following
          </P>
        </div>
        <div>
          <P primary style={{ fontWeight: "900" }}>
            <Span>820K</Span> Followers
          </P>
        </div>
      </Footer>
    </Div>
  );
};

export default TweetModal;
