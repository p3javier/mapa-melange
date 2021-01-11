import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";

import store from "./redux/store";

test("it works", () => {});

test("renders", () => {
  const { debug } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  debug();
});
