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
  P,
  Span,
  Links,
  Div,
  Text,
} from "../Tweets/TweetsStyle";
import TweetModal from "../TweetModal/TweetModal";
import React, { useState } from "react";
const Tweet = ({ tweet }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Div>
      <Tweett>
        <TweetLeft>
          <Links to={`/users/${tweet.user.username}`}>
            <img
              onMouseEnter={() => setShowModal(true)}
              onMouseLeave={() => setShowModal(false)}
              alt="user"
              src={tweet.user.photo}
            />
          </Links>
          {showModal && (
            <TweetModal
              name={tweet.user.username}
              img={tweet.user.photo}
              email={tweet.user.email}
            />
          )}
        </TweetLeft>
        <TweetRight>
          <Paragraph>
            <Links to={`/users/${tweet.user.username}`}>
              <P>
                {tweet.user.username} <Span>{tweet.user.email}</Span>
              </P>
            </Links>

            <Text>{tweet.text}</Text>
          </Paragraph>

          {tweet.photo && (
            <Links to="">
              <Image
                style={{
                  backgroundImage: `url(${tweet.photo})`,
                }}
              ></Image>
            </Links>
          )}
          {tweet.children}
          <Buttons>
            <Comment />
            <Retweet />
            <Heart />
            <Share />
          </Buttons>
        </TweetRight>
      </Tweett>
    </Div>
  );
};
export default Tweet;
