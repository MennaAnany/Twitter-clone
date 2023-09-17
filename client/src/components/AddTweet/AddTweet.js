import React, { useRef, useState } from "react";
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
import { useUserActions } from "../../TweetsStore";
import { useUserStore } from "../../UserStore";
const AddTweet = () => {
  const { addTweets } = useUserActions();
  const [photo, setTweetImage] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const currentUser = useUserStore((state) => state.user);
  const textareaRef = useRef(null);

  const sendTweet = (e) => {
    e.preventDefault();
    const text = textareaRef.current.value;
    if (text || photo) {
      const fd = new FormData();
      if (photo) fd.append("photo", photo, photo.name);
      fd.append("text", text);

      addTweets({
        tweet: fd,
      });
      setPreviewImage(null);
      setTweetImage(null);
      textareaRef.current.value = "";
    }
  };

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
        <UserImg src={currentUser.photo} alt="user" />
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
            <input type="file" id="photo" onChange={getTweetImage} />
            <label htmlFor="photo">
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
