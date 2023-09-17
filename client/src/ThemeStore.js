import { create } from "zustand";
import { DIM_MODE, BLUE } from "./styledComponents/theme";
export const useStore = create((set) => ({
  currentMode: DIM_MODE,
  currentTheme: BLUE,
  setCurrentMode: (mode) => set(() => ({ currentMode: mode })),
  setCurrentTheme: (theme) => set(() => ({ currentTheme: theme })),
}));

const serializeState = (state) => JSON.stringify(state);

const deserializeState = (stateString) => JSON.parse(stateString);

const saveStateToLocalStorage = (state) => {
  localStorage.setItem("storeState", serializeState(state));
};

const loadStateFromLocalStorage = () => {
  const stateString = localStorage.getItem("storeState");
  if (stateString) {
    return deserializeState(stateString);
  } else {
    return undefined;
  }
};

const setStoreState = (state) => {
  useStore.setState(() => state);
};

useStore.subscribe((newState) => {
  saveStateToLocalStorage(newState);
});

const loadedState = loadStateFromLocalStorage();
if (loadedState) {
  setStoreState(loadedState);
}

// import { create } from "zustand";
// import { persist } from "zustand-persist";

// import { DIM_MODE, BLUE } from "./styledComponents/theme";

// export const useStore = persist(
//   create((set, get) => ({
//     currentMode: DIM_MODE,
//     currentTheme: BLUE,
//     setCurrentMode: (mode) => set(() => ({ currentMode: mode })),
//     setCurrentTheme: (theme) => set(() => ({ currentTheme: theme })),
//   }))
// );
