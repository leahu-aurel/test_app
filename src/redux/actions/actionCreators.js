import {
  SET_BOOKS,
  ADD_SHELF,
  ADD_BOOK_TO_SHELF,
  ADD_REVIEW_TO_SHELF,
} from "./actions";
import { v4 } from "uuid";
export const setBooks = (books) => ({
  type: SET_BOOKS,
  books,
});

export const addReviewToBook = (review, id) => ({
  type: ADD_BOOK_TO_SHELF,
  review,
  id,
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

export const addReviewToShelf = (review, shelf_id) => ({
  type: ADD_REVIEW_TO_SHELF,
  review,
  shelf_id,
});
