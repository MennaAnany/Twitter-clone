import React, { useEffect, useState } from "react";
import { useUserActions } from "../../TweetsStore";
import { useTweetStore } from "../../TweetsStore";
import Tweet from "../Tweet/Tweet";
import { Spinner } from "./TweetsStyle";
const Tweets = () => {
  const res = useTweetStore((state) => state.res);
  const tweets = useTweetStore((state) => state.tweet.data);
  const [loading, setLoading] = useState(true);
  const { getTweets } = useUserActions();

  const fetchTweets = async () => {
    try {
      await getTweets();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, [res]);

  return (
    <>
      {loading ? (
        <Spinner size={80} thickness={4} />
      ) : (
        tweets?.map((tweet, i) => <Tweet tweet={tweet} key={i} />)
      )}
    </>
  );
};

export default Tweets;
