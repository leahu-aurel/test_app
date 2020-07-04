import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@material-ui/core";
import useModal from "../../hooks/useModal";
import useReview from "../../hooks/useReview";

export default ({ type, id }) => {
  const [open, handleOpen, handleClose] = useModal();
  const [
    review,
    handleReviewChange,
    rate,
    handleRateChange,
    handleSubmit,
  ] = useReview(type, id);

  return (
    <>
      <Button onClick={handleOpen} style={{ margin: "auto" }}>
        Add review
      </Button>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <>
            <DialogTitle id="form-dialog-title">
              Add a new review to this {`${type}`}:
            </DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="idea"
                label="Your review:"
                fullWidth
                required
                multiline
                value={review}
                onChange={handleReviewChange}
                inputProps={{
                  maxLength: 280,
                }}
              />
              <TextField
                fullWidth
                type="number"
                value={rate}
                onChange={handleRateChange}
                InputProps={{
                  inputProps: {
                    max: 5,
                    min: 1,
                  },
                }}
                label="Rate from 1 to 5:"
              />
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                color="primary"
                onClick={() => {
                  handleSubmit();
                  handleClose();
                }}
              >
                Submit
              </Button>
            </DialogActions>
          </>
        </Dialog>
      </div>
    </>
  );
};
