import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { Typography, IconButton } from "@material-ui/core";
import useMode from "../../hooks/useMode";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  shelvesButton: {
    flexGrow: 1,
  },
  appBar: { backgroundColor: "white", color: "black" },
}));

export default () => {
  const classes = useStyles();
  const [checked, toggleChecked] = useMode();

  const history = useHistory();

  const pushTo = (link) => {
    history.push(link);
  };
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Button
          onClick={() => pushTo("/books")}
          color="inherit"
          className={classes.menuButton}
        >
          Books
        </Button>
        <Button onClick={() => pushTo("/shelves")} color="inherit">
          Shelves
        </Button>
        <Typography className={classes.shelvesButton} />
        <IconButton style={{ color: "black" }} onClick={toggleChecked}>
          {checked ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
