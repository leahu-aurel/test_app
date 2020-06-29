import { SET_BOOKS } from "./actions";

export const setBooks = (books) => ({
  type: SET_BOOKS,
  books,
});
