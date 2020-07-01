import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardActionArea,
  CardMedia,
  FormControl,
  InputLabel,
  Select,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    margin: "20px auto",
    alignContent: "center",
    maxWidth: 350,
  },
  media: {
    height: 500,
  },
}));

export default () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { id } = useParams();
  const classes = useStyles();
  const books = useSelector((state) => state.books);
  const book = books.filter((bookRef) => bookRef.id === id)[0];
  const { image, title, author, description, category, pages } = book;

  const body = (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Add this book to a shelf:
        </DialogTitle>
        <DialogContent>
          <FormControl
            margin="dense"
            fullWidth
            required
            className={classes.formControl}
          >
            <InputLabel htmlFor="age-native-simple">Shelf</InputLabel>
            <Select
              native
              value=""
              inputProps={{
                name: "age",
                id: "age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>One</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button color="primary">Cancel</Button>
          <Button color="primary">Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
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
      </CardActionArea>
      <CardActions disableSpacing>
        <Button onClick={handleOpen} style={{ margin: "auto" }}>
          {" "}
          Add to shelf
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
        <Button style={{ margin: "auto" }}>Add review</Button>
      </CardActions>
    </Card>
  );
};
