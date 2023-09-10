import React from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../ThemeStore.js";
import {
  Header,
  Tweet,
  Section,
  Form,
  BG,
  DisplayContainer,
  Div,
  H4,
  P,
  Button,
  Head,
} from "./DisplayModalStyle";
import ColorDisplay from "../ColorsDisplay/ColorsDisplay";
import BackgroundDisplay from "../BackgroundDisplay/BackgroundDisplay";
import TweetDisplay from "../TweetDisplay/TweetDisplay";
import userImage from "../../img/Viper_icon.webp";
import Backdrop from "../Backdrop/Backdrop";
import blue from "../../img/blue.svg";
import yellow from "../../img/yellow.svg";
import pink from "../../img/pink.svg";
import orange from "../../img/orange.svg";
import green from "../../img/green.svg";
import purple from "../../img/purple.svg";
import {
  LIGHT_MODE,
  DARK_MODE,
  DIM_MODE,
  PINK,
  BLUE,
  YELLOW,
  PURPLE,
  ORANGE,
  GREEN,
} from "../../styledComponents/theme.js";
const DisplayModal = (props) => {
  const store = useStore();
  const colors = [
    { id: "blue", img: blue, theme: BLUE },
    { id: "yellow", img: yellow, theme: YELLOW },
    { id: "pink", img: pink, theme: PINK },
    { id: "purple", img: purple, theme: PURPLE },
    { id: "orange", img: orange, theme: ORANGE },
    { id: "green", img: green, theme: GREEN },
  ];

  const navigate = useNavigate();

  return (
    <DisplayContainer>
      <Backdrop clicked={() => navigate(-1)} bgColor={`#6e767d66`} />
      <Div>
        <Head>
          <Header>
            <H4>Customize your view</H4>
            <P>
              Display settings affect all of your Twitter accounts on this
              browser. These settings are only visible to you.
            </P>
          </Header>
          <Tweet style={{ marginBottom: "1rem" }}>
            <TweetDisplay
              userimg={userImage}
              name="viper"
              handle="Viper_Valorant"
            >
              At the heart of Twitter are short messages called Tweets — just
              like this one — which can include photos, videos, links, text, and
              more.
            </TweetDisplay>
          </Tweet>
        </Head>
        <Section>
          <div>
            <P title="true">color</P>
          </div>
          <Div secondry>
            <Form>
              {colors.map((color) => (
                <ColorDisplay
                  key={color.id}
                  id={color.id}
                  img={color.img}
                  onClick={() => store.setCurrentTheme(color.theme)}
                />
              ))}
            </Form>
          </Div>

          <div>
            <P title="true">Background</P>
          </div>
          <Div secondry>
            <BG>
              <BackgroundDisplay
                id="LIGHT_MODE"
                name="Default mode"
                onClick={() => store.setCurrentMode(LIGHT_MODE)}
                checked={props.background === "LIGHT_MODE"}
              />
              <BackgroundDisplay
                id="DIM_MODE"
                name="Dim mode"
                onClick={() => store.setCurrentMode(DIM_MODE)}
                checked={props.background === "DIM_MODE"}
              />
              <BackgroundDisplay
                id="DARK_MODE"
                name="Lights out"
                onClick={() => store.setCurrentMode(DARK_MODE)}
                checked={props.background === "DARK_MODE"}
              />
            </BG>
          </Div>

          <Button onClick={() => navigate(-1)}>Done</Button>
        </Section>
      </Div>
    </DisplayContainer>
  );
};

export default DisplayModal;
