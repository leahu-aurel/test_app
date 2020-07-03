import React from "react";
import Avatar from "@material-ui/core/Avatar";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Shelf from "./shelf";
import { Link } from "react-router-dom";
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
  const classes = useStyles();
  const shelves = Object.values(useSelector((state) => state.shelves));
  console.log(shelves);
  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        {shelves.length ? (
          <>
            {" "}
            <Typography variant="h5">
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/shelves/create"
              >
                Add a new shelf
              </Link>
            </Typography>
            {shelves.map((shelf) => (
              <Shelf key={shelf.id} {...shelf} />
            ))}
          </>
        ) : (
          <>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">
              No shelves yet.{" "}
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/shelves/create"
              >
                Create your first shelf
              </Link>
            </Typography>
          </>
        )}
      </div>
    </Container>
  );
};
