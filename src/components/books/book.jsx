import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 400,
  },
  root: {
    maxWidth: 315,
    margin: theme.spacing(2),
  },
}));

export default function RecipeReviewCard(props) {
  const { title, author, image, id } = props;
  const classes = useStyles();
  const history = useHistory();
  const handlePush = () => {
    history.push(`/${id}`);
  };
  return (
    <Grid item xs={12} sm={6} className={classes.root}>
      <Card className={classes.root} onClick={handlePush}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {author}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
