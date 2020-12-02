import React from "react";

//import "./App.css";

import Map from "./components/container/Map/Map";

import NavBar from "./components/container/NavBar/NavBar";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { sizing } from "@material-ui/system";

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

  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.grid}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
}
