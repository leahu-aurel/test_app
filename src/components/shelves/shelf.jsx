import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import AddReview from "../modals/addReview";
import { Link } from "react-router-dom";
import Reviews from "../reviews/reviews";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    width: 500,
    margin: theme.spacing(2),
    boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.2)",
  },
}));

export default ({ name, categories, books, id, reviews }) => {
  const classes = useStyles();
  const booksState = useSelector((state) => state.books);
  books = books.map((book) => ({
    id: book,
    title: booksState[book].title,
  }));
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
                <Typography
                  key={book.id}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to={`/${book.id}`}
                  >
                    {book.title}
                  </Link>
                </Typography>
              ))}
              <Reviews reviews={reviews} />
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
