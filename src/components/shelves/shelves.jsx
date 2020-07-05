import React from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Shelf from "./shelf";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "black",
  },
}));

export default () => {
  const history = useHistory();
  const classes = useStyles();
  const shelves = Object.values(useSelector((state) => state.shelves));
  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        {shelves.length ? (
          <>
            {" "}
            <Button onClick={() => history.push("/shelves/create")}>
              Add a new shelf
            </Button>
            {shelves.map((shelf) => (
              <Shelf key={shelf.id} {...shelf} />
            ))}
          </>
        ) : (
          <Button onClick={() => history.push("/shelves/create")}>
            No shelves yet. Create your first shelf
          </Button>
        )}
      </div>
    </Container>
  );
};
