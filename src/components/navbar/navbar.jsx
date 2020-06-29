import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },

  appBar: { backgroundColor: "white", color: "black" },
}));

export default () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Button color="inherit" className={classes.menuButton}>
          Books
        </Button>
        <Button color="inherit">Shelves</Button>
      </Toolbar>
    </AppBar>
  );
};
