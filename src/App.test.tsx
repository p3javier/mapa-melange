import { render, screen } from "@testing-library/react";
import { App, theme } from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

//import userEvent from "@testing-library/user-event";

import { axe, toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);

test("has no html violations", async () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
/** 
describe("theme switch", () => {
  it("switch to dark mode", async () => {
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
*/
