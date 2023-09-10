import { create } from "zustand";
import axios from "./axios";
const useUserStore = create((set) => ({
  user: {},
  error: null,
  actions: {
    signup: async ({ user }) => {
      try {
        const response = await axios.post("users/signup", user);
        console.log(response);
        // set((state) => ({
        //   user: response.data.data.user,
        // }));
        console.log({ user });
      } catch (error) {
        // error(error.response.data.message);
        console.log(error.response.data.message);
      }
    },

    signin: async ({ user }) => {
      try {
        const response = await axios.post("users/signin", user);
        console.log(response);
        console.log(response.data.data.user);

        // set((state) => ({
        //   user: response.data.data,
        // }));

        console.log(user);
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
  },
}));

// setError: () => {
//   const error = (error.response.data.message)
// },

export const { signin } = useUserStore.getState().actions;
export const useUserActions = () => useUserStore((state) => state.actions);
