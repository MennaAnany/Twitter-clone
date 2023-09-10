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
import { useUserActions2 } from "../../TweetsStore";
// import { signin } from "../../UserStore";
const AddTweet = () => {
  const { addTweets } = useUserActions2();
  const [tweetImage, setTweetImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const textareaRef = useRef(null);

  const sendTweet = (e) => {
    e.preventDefault();

    // const text = textareaRef.current.value;
    // if (text || tweetImage) {
    //   const fd = new FormData();

    //   if (tweetImage) fd.append("tweetPhoto", tweetImage, tweetImage.name);
    //   fd.append("text", text);

    //   console.log([...fd]);

    //   // console.log(text);
    //   // console.log(tweetImage);

    //   addTweets({
    //     tweet: [...fd],
    //   });

    //   setPreviewImage(null);
    //   setTweetImage(null);
    // }
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

/////////////
// import React, { useRef, useState } from "react";
// import userImage from "../../img/Viper_icon.webp";
// import {
//   Tweet,
//   TweetLeft,
//   TweetRight,
//   UserImg,
//   Image,
//   TweetBottom,
//   TweetIcons,
//   MdGifNew,
//   RiBarChartHorizontalLine2,
//   TweetButton,
//   TextArea,
//   FiImageNew,
//   IconButton,
//   FiSmileNew,
//   FiCalendarNew,
// } from "./AddTweetStyle";

// import { useUserActions } from "../../TweetsStore";

// const AddTweet = (props) => {
//   const [tweetImage, setTweetImage] = useState(null);
//   // const [previewImage, setPreviewImage] = useState(null);

//   // const textareaRef = useRef(null);

//   const [content, setContent] = useState("");
//   const [photo, setPhoto] = useState("");
//   // const [video, setVideo] = useState("");

//   console.log(content);

//   const { addTweets } = useUserActions();

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     addTweets({
//       tweet: { content, photo },
//     });
//     // navigate("/home");
//   };

//   const getTweetImage = async (e) => {
//     const file = e.target.files[0];
//     setTweetImage(file);

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       setPhoto(e.target.result);
//     };

//     reader.readAsDataURL(file);
//   };

//   return (
//     <Tweet>
//       <TweetLeft>
//         <UserImg src={userImage} alt="user" />
//       </TweetLeft>
//       <TweetRight>
//         <TextArea value={content} placeholder="What's Happening" />
//         {photo && (
//           <Image>
//             <img src={photo} alt="preview" />
//           </Image>
//         )}

//         <TweetBottom>
//           <TweetIcons>
//             <input type="file" id="tweetImage" onChange={getTweetImage} />
//             <label htmlFor="tweetImage">
//               <IconButton>
//                 <FiImageNew />
//               </IconButton>
//             </label>
//             <IconButton>
//               <MdGifNew />
//             </IconButton>
//             <IconButton>
//               <RiBarChartHorizontalLine2 />
//             </IconButton>
//             <IconButton>
//               <FiSmileNew />
//             </IconButton>
//             <IconButton>
//               <FiCalendarNew />
//             </IconButton>
//           </TweetIcons>
//           <div>
//             <TweetButton onClick={onSubmit} type="button">
//               Tweet
//             </TweetButton>
//           </div>
//         </TweetBottom>
//       </TweetRight>
//     </Tweet>
//   );
// };

// export default AddTweet;
