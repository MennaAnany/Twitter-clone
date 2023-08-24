import React, { useRef, useState } from "react";
import userImage from "../../img/Viper_icon.webp";
import {
  Tweet,
  TweetLeft,
  TweetRight,
  UserImg,
  Image,
  TweetBottom,
  TweetIcons,
  MdGifNew,
  RiBarChartHorizontalLine2,
  TweetButton,
  TextArea,
  FiImageNew,
  IconButton,
  FiSmileNew,
  FiCalendarNew,
} from "./AddTweetStyle";

const AddTweet = (props) => {
  const [tweetImage, setTweetImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const textareaRef = useRef(null);

  const sendTweet = () => {};

  const getTweetImage = async (e) => {
    const file = e.target.files[0];
    setTweetImage(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Tweet>
      <TweetLeft>
        <UserImg src={userImage} alt="user" />
      </TweetLeft>
      <TweetRight>
        <TextArea ref={textareaRef} placeholder="What's Happening" />
        {previewImage && (
          <Image>
            <img src={previewImage} alt="preview" />
          </Image>
        )}

        <TweetBottom>
          <TweetIcons>
            <input type="file" id="tweetImage" onChange={getTweetImage} />
            <label htmlFor="tweetImage">
              <IconButton>
                <FiImageNew />
              </IconButton>
            </label>
            <IconButton>
              <MdGifNew />
            </IconButton>
            <IconButton>
              <RiBarChartHorizontalLine2 />
            </IconButton>
            <IconButton>
              <FiSmileNew />
            </IconButton>
            <IconButton>
              <FiCalendarNew />
            </IconButton>
          </TweetIcons>
          <div>
            <TweetButton onClick={sendTweet} type="button">
              Tweet
            </TweetButton>
          </div>
        </TweetBottom>
      </TweetRight>
    </Tweet>
  );
};

export default AddTweet;
