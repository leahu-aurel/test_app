import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import useBookAdd from "../../hooks/useBookAdd";
import useModal from "../../hooks/useModal";
import useShelves from "../../hooks/useShelves";

export default ({ id, category }) => {
  const shelves = useShelves(id, category);
  const [open, handleOpen, handleClose] = useModal();
  const [chosenShelf, handleShelfChange, handleSubmit] = useBookAdd(id);
  return (
    <>
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
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            {shelves.length ? (
              <>
                <DialogTitle id="form-dialog-title">
                  Add this book to a shelf:
                </DialogTitle>
                <DialogContent>
                  <FormControl margin="dense" fullWidth required>
                    <InputLabel htmlFor="age-native-simple">Shelf</InputLabel>
                    <Select
                      native
                      value={chosenShelf}
                      onChange={handleShelfChange}
                    >
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
            ) : (
              <DialogTitle id="form-dialog-title">
                There are no available shelves
              </DialogTitle>
            )}
          </Dialog>
        </div>
      </Modal>
    </>
  );
};
