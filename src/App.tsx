import React from "react";

//import "./App.css";

import Map from "./components/container/Map/Map.jsx";

import NavBar from "./components/container/NavBar/NavBar";

import useMediaQuery from "@material-ui/core/useMediaQuery";
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

import ControlPanel from "./components/container/ControlPanel/ControlPanel";

import { useSelector } from "react-redux";
import { selectLayer } from "./redux/reducers/layerReducer";

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

export default function App() {
  const classes = useStyles();

  const layer = useSelector(selectLayer);

  const theme = createMuiTheme({
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
