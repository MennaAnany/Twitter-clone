import { create } from "zustand";
import axios from "./axios";

export const useTweetStore = create((set) => ({
  tweet: [],
  error: null,
  res: null,
  actions: {
    addTweets: async ({ tweet }) => {
      try {
        const response = await axios.post("tweets", tweet);
        console.log(response);
        set((state) => ({
          res: response.data.data.data,
        }));
      } catch (error) {
        console.log(error);
      }
    },
    getTweets: async () => {
      try {
        const tweetsResponse = await axios.get("tweets");
        set((state) => ({
          tweet: tweetsResponse.data.data,
        }));
      } catch (error) {
        console.log(error);
      }
    },
  },
}));
export const { addTweets } = useTweetStore.getState().actions;
export const useUserActions = () => useTweetStore((state) => state.actions);
