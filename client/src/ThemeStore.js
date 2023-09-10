import { create } from "zustand";
import {
  LIGHT_MODE,
  DARK_MODE,
  DIM_MODE,
  BLUE,
} from "./styledComponents/theme";

export const useStore = create((set) => ({
  currentMode: DIM_MODE,
  currentTheme: BLUE,
  setCurrentMode: (mode) => set(() => ({ currentMode: mode })),
  setCurrentTheme: (theme) => set(() => ({ currentTheme: theme })),
}));
