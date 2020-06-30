import React from "react";
import useItems from "../../hooks/useItems";
import { useSelector } from "react-redux";
import Book from "./book";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default () => {
  const classes = useStyles();
  const books = useSelector((state) => state.books);
  const [isFetching] = useItems(books);
  console.log(
    books.forEach((item) => {
      console.log(item);
    })
  );
  return (
    <div>
      {isFetching || !books ? (
        "Loading "
      ) : (
        <Grid
          container
          className={classes.root}
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {books.map((item) => (
            <Book key={item.id} {...item} />
          ))}
        </Grid>
      )}
    </div>
  );
};
