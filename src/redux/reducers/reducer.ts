import { createReducer } from "@reduxjs/toolkit";

import increment from "../actions/increment";
import decrement from "../actions/decrement";

const counter = createReducer(0, {
  [increment.type]: (state) => state + 1,
  [decrement.type]: (state) => state - 1,
});

export default counter;
