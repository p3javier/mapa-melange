import React from "react";

import Map from "./features/Map/Map.jsx";

import NavBar from "./features/NavBar/NavBar";

import {
  makeStyles,
  createStyles,
  Theme,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import ControlPanel from "./features/ControlPanel/ControlPanel";

import { useSelector } from "react-redux";
import { selectLayer } from "./redux/reducers/layerReducer";
//import { DefaultTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    grid: {
      width: "100vw",
      height: "100vh",
      spacing: 0,
      justify: "space-around",
    },
  })
);

export var theme: any;

export function App() {
  const classes = useStyles();

  const layer = useSelector(selectLayer);

  theme = createMuiTheme({
    palette: {
      type: layer === "light" ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container spacing={0} className={classes.grid}>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Map />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <ControlPanel />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
