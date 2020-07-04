import React, { Fragment } from "react";
import { CardContent, Typography } from "@material-ui/core";

export default ({ reviews }) => {
  if (reviews.length >= 4) {
    reviews = reviews.slice(0, 3);
  }
  return (
    <>
      {(reviews.length || null) && (
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Reviews:
          </Typography>
          {reviews.map(({ review, rate, id }) => (
            <Fragment key={id}>
              <Typography gutterBottom variant="h5" component="h2">
                Review:
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {review}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Rate: {rate}
              </Typography>

              <hr />
            </Fragment>
          ))}
        </CardContent>
      )}
    </>
  );
};
