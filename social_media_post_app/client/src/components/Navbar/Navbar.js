import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import film from "../../images/film.png";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant="h2" align="center">
          Film Palette
        </Typography>
        <img className={classes.image} src={film} alt="film" height="60" />
      </div>
    </AppBar>
  );
};

export default Navbar;
