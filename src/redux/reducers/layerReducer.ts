import { createSlice } from "@reduxjs/toolkit";

export const lightDarkModeSlice = createSlice({
  name: "layer",
  initialState: {
    value: "light",
  },
  reducers: {
    light: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = "light";
    },
    dark: (state) => {
      state.value = "dark";
    },
  },
});

export const { light, dark } = lightDarkModeSlice.actions;

export default lightDarkModeSlice.reducer;

export const selectLayer = (state: { layer: { value: any } }) =>
  state.layer.value;
