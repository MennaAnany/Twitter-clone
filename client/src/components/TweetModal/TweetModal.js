import React from "react";
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
    <>
      <Div>
        <Header>
          <Image>
            <img src={props.img} alt="user" />
          </Image>
          <div>
            <Button>Follow</Button>
          </div>
        </Header>
        <Name>
          <div>
            <P primary="true">{props.name}</P>
          </div>
          <div>
            <P>{props.email}</P>
          </div>
        </Name>
        <Bio>
          <P primary="true">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem laudantim.
          </P>
        </Bio>
        <Footer>
          <div style={{ marginRight: "0.5rem" }}>
            <P primary="true" style={{ fontWeight: "900" }}>
              <Span>850</Span> Following
            </P>
          </div>
          <div>
            <P primary="true" style={{ fontWeight: "900" }}>
              <Span>820K</Span> Followers
            </P>
          </div>
        </Footer>
      </Div>
    </>
  );
};

export default TweetModal;
