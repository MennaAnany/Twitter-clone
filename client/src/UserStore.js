import { create } from "zustand";
import axios from "./axios";

export const useUserStore = create((set) => ({
  user: {},
  signupError: null,
  signinError: null,
  actions: {
    signup: async ({ user }) => {
      try {
        const response = await axios.post("users/signup", user);
        set((state) => ({
          user: response.data.data.user,
          signinError: null,
        }));
      } catch (error) {
        set((state) => ({
          signupError: error.response.data.message,
        }));
        console.log(error.response.data.message);
      }
    },

    signin: async ({ user }) => {
      try {
        const response = await axios.post("users/signin", user);
        set((state) => ({
          user: response.data.data.user,
          signinError: null,
        }));
      } catch (error) {
        set((state) => ({
          signinError: error.response.data.message,
        }));
      }
    },

    updateUser: async ({ user }) => {
      try {
        const response = await axios.post("users/updateMe", user);
        set((state) => ({
          user: response.data.data.user,
        }));
      } catch (error) {
        console.log(error);
      }
    },

    getMe: async () => {
      try {
        const response = await axios.get("users/me");
        set((state) => ({
          user: response.data.data.data,
        }));
      } catch (error) {
        console.log(error);
      }
    },

    signout: async () => {
      try {
        const response = await axios.get("users/signout");
        set((state) => ({
          user: {},
        }));
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
}));

export const { getMe } = useUserStore.getState().actions;
export const { updateUser } = useUserStore.getState().actions;
export const { signin } = useUserStore.getState().actions;
export const { signout } = useUserStore.getState().actions;
export const useUserActions = () => useUserStore((state) => state.actions);
