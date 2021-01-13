import React from "react";
import { render, screen } from "@testing-library/react";
import { App, theme } from "./App";
import { Provider } from "react-redux";

import store from "./redux/store";

import userEvent from "@testing-library/user-event";

test("it works", () => {});

describe("theme switch", () => {
  it("describe", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByTestId("theme-switch")).toBeChecked();
    userEvent.click(screen.getByTestId("theme-switch"));
    //expect(await screen.findByTestId("theme-switch")).not.toBeChecked();
    expect(theme.palette.type).toBe("dark");
  });
});
