import { SET_BOOKS, ADD_SHELF } from "./actions";
import { v4 } from "uuid";
export const setBooks = (books) => ({
  type: SET_BOOKS,
  books,
});

export const addShelf = (name, categories) => ({
  type: ADD_SHELF,
  shelf: {
    id: v4(),
    name,
    categories,
  },
});
