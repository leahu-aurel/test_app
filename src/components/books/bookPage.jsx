import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import AddToShelf from "../modals/addToShelf";
import AddReview from "../modals/addReview";
import Reviews from "../reviews/reviews";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    margin: "20px auto",
    alignContent: "center",
    maxWidth: 350,
  },
  media: {
    height: 500,
  },
}));

export default () => {
  const { id } = useParams();
  const classes = useStyles();
  const book = useSelector((state) => state.books)[id];

  const { image, title, author, description, category, pages, reviews } = book;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Category:
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {category}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Pages: {pages}
          </Typography>
        </CardContent>
        <Reviews reviews={reviews} />
      </CardActionArea>

      <CardActions disableSpacing>
        <AddToShelf id={id} category={category} />
        <AddReview type="book" id={id} />
      </CardActions>
    </Card>
  );
};
