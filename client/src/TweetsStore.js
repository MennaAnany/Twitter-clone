import { create } from "zustand";
import axios from "./axios";

const useTweetStore = create((set) => ({
  tweet: {},
  error: null,
  actions: {
    addTweets: async ({ tweet }) => {
      try {
        const response = await axios.post("tweets", tweet);
        console.log(response);
        console.log("done");
      } catch (error) {
        console.log(error);
        console.log("error");
      }
    },
  },
}));

export const useUserActions2 = () => useTweetStore((state) => state.actions);
