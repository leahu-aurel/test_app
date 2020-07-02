import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
import { addBookToShelf } from "../../redux/actions/actionCreators";

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
  const { id } = useParams();
  const classes = useStyles();
  const book = useSelector((state) => state.books)[id];
  const shelves = useSelector((state) => state.shelves);
  console.log(shelves);
  const { image, title, author, description, category, pages } = book;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    console.log(chosenShelf);
    if (chosenShelf) {
      dispatch(addBookToShelf(chosenShelf, id));
    } else {
      alert("No shelves chosen");
    }
    setOpen(false);
  };

  const [chosenShelf, setShelf] = useState("");

  const handleShelfChange = (e) => {
    console.log(e.target.value);
    setShelf(e.target.value);
  };

  const body = (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {Object.values(shelves).length ? (
          <>
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
                <Select native value={chosenShelf} onChange={handleShelfChange}>
                  <option aria-label="None" value="" />
                  {Object.values(shelves).map((shelf) => (
                    <option value={shelf.id} key={shelf.id}>
                      {shelf.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={handleClose}>
                Cancel
              </Button>
              <Button color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </DialogActions>
          </>
        ) : (
          <DialogTitle id="form-dialog-title">
            There are no available shelves
          </DialogTitle>
        )}
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
