import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import AddReview from "../modals/addReview";
export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    width: 500,
    marginTop: theme.spacing(2),
    marginBot: theme.spacing(2),
  },
}));

export default ({ name, categories, books, id }) => {
  const classes = useStyles();
  const booksState = useSelector((state) => state.books);
  books = books.map((book) => booksState[book].title);
  return (
    <Grid item xs={12} sm={12} md={12} className={classes.root}>
      <Card>
        <CardHeader title={name} subheader={categories.join(", ")} />
        <CardContent>
          {books.length ? (
            <>
              <Typography gutterBottom variant="h5" component="h2">
                Books:
              </Typography>
              {books.map((book) => (
                <Typography gutterBottom variant="h5" component="h2">
                  {book}
                </Typography>
              ))}
              <AddReview type="shelf" id={id} />
            </>
          ) : (
            <Typography variant="body2" color="textSecondary" component="p">
              No books yet on this shelf
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};
