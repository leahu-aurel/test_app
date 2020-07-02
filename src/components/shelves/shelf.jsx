import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    maxWidth: 600,
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default ({ name, categories, books }) => {
  console.log(name);
  const classes = useStyles();
  const booksState = useSelector((state) => state.books);
  books = books.map((book) => booksState[book.id].name);
  console.log(books);
  return (
    <Grid item xs={12} sm={6} className={classes.root}>
      <Card className={classes.root}>
        <CardHeader title={name} subheader={categories.join(", ")} />
        <CardContent>
          {books.length ? (
            <>
              <Typography gutterBottom variant="h5" component="h2">
                Books:
              </Typography>
              {/* {books.map((book) => (
                <Typography gutterBottom variant="h5" component="h2">
                  {book}
                </Typography>
              ))} */}
            </>
          ) : (
            <Typography variant="body2" color="textSecondary" component="p">
              No books yet on this shelf
            </Typography>
          )}
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardContent>
      </Card>
    </Grid>
  );
};
