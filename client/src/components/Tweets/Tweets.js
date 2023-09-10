import React, { useState } from "react";
import {
  Tweett,
  TweetLeft,
  TweetRight,
  Paragraph,
  Buttons,
  Comment,
  Retweet,
  Heart,
  Image,
  Share,
  Border,
  P,
  Span,
  Links,
  Div,
} from "./TweetsStyle";
import userImage from "../../img/Viper_icon.webp";
import TweetModal from "../TweetModal/TweetModal";
import { Link } from "react-router-dom";

const Tweet = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Div>
        <Tweett>
          <TweetLeft>
            <Links
              to={{
                pathname: `user/${props.handle}`,
              }}
            >
              <img
                onMouseEnter={() => setShowModal(true)}
                onMouseLeave={() => setShowModal(false)}
                alt="user"
                src={userImage}
              />
            </Links>
            {showModal ? (
              <TweetModal
                name={props.name}
                img={props.userimg}
                handle={props.email}
              />
            ) : null}
          </TweetLeft>
          <TweetRight>
            <Paragraph>
              <Links
                to={{
                  pathname: `user/${props.handle}`,
                }}
              >
                <P style={{ marginBottom: "0.5rem" }}>
                  Viper <Span>@viper</Span>
                </P>
              </Links>
            </Paragraph>

            {props.tweetimg && (
              <Link
                exact
                to={{
                  pathname: `/${props.handle}/photo/${props.tweetid}`,
                  state: {
                    img: props.tweetimg,
                  },
                }}
              >
                <Image
                  style={{
                    backgroundImage: `url(${props.tweetimg})`,
                  }}
                ></Image>
              </Link>
            )}
            {props.children}

            <Buttons>
              <Comment />
              <Retweet />
              <Heart />
              <Share />
            </Buttons>
          </TweetRight>
        </Tweett>
      </Div>
      <Border />
    </>
  );
};

export default Tweet;
