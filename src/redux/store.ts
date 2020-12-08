import lightDarkModeSlice from "./reducers/layerReducer";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    layer: lightDarkModeSlice,
  },
});

export default store;
