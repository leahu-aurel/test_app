import React from "react";
import Avatar from "@material-ui/core/Avatar";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Shelf from "./shelf";
export const useStyles = makeStyles((theme) => ({
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
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    marginTop: theme.spacing(2),
  },
}));

export default () => {
  const classes = useStyles();
  const shelves = useSelector((state) => state.shelves);
  console.log(shelves);
  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        {shelves.length ? (
          <>
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
              <Link color="inherit" href="/shelves/create">
                Create your first shelf
              </Link>
            </Typography>
          </>
        )}
      </div>
    </Container>
  );
};
