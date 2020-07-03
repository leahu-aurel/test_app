import React from "react";
import useItems from "../../hooks/useItems";
import { useSelector } from "react-redux";
import Book from "./book";
import { Grid } from "@material-ui/core";

export default () => {
  const books = useSelector((state) => state.books);
  useItems(books);

  return (
    <div>
      {!books ? (
        "Loading "
      ) : (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {Object.values(books).map((item) => (
            <Book key={item.id} {...item} />
          ))}
        </Grid>
      )}
    </div>
  );
};
