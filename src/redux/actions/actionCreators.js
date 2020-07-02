import { SET_BOOKS, ADD_SHELF, ADD_BOOK_TO_SHELF } from "./actions";
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
    books: [],
  },
});

export const addBookToShelf = (shelf_id, book_id) => ({
  type: ADD_BOOK_TO_SHELF,
  shelf_id,
  book_id,
});
