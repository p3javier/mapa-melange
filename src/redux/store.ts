import lightDarkModeSlice from "./reducers/layerReducer";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    layer: lightDarkModeSlice,
  },
});
/**
 * You can only write "mutating" logic in Redux Toolkit's createSlice and createReducer because they use Immer inside! If you write mutating logic in reducers without Immer, it will mutate the state and cause bugs!
 */
export default store;
