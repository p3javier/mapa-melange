import React from "react";
import Switch from "@material-ui/core/Switch";
import { useDispatch } from "react-redux";
import { light, dark } from "../../redux/reducers/layerReducer";

import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

export default function ThemeSwitch() {
  const [state, setState] = React.useState({
    checked: true,
  });

  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
    setState({ ...state, [event.target.name]: event.target.checked });
    if (event.target.checked === true) {
      dispatch(light());
    } else {
      dispatch(dark());
    }
  };
  return (
    <>
      <Brightness4Icon />
      <Switch
        data-testid="theme-switch"
        checked={state.checked}
        onChange={handleChange}
        color="primary"
        name="checked"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Brightness7Icon />
    </>
  );
}
