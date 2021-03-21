import React from "react";
import { render, screen } from "@testing-library/react";
import ColorSwitch from "./ThermeSwitch";

import { Provider } from "react-redux";

import store from "../../../redux/store";

import userEvent from "@testing-library/user-event";

describe("ColorSwitch button", () => {
  it("should render", () => {
    render(
      <Provider store={store}>
        <ColorSwitch />
      </Provider>
    );
  });
  test("click", () => {
    render(
      <Provider store={store}>
        <ColorSwitch />
      </Provider>
    );

    userEvent.click(screen.getByTestId("theme-switch"));
    expect(screen.getByTestId("theme-switch")).not.toBeChecked();
    //console.log(screen.getByTestId("theme-switch"));
    console.log(store.getState());
  });
});
