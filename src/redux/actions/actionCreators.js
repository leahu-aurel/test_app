import { v4 } from "uuid";
import {
  SET_BOOKS,
  ADD_SHELF,
  ADD_BOOK_TO_SHELF,
  ADD_REVIEW_TO_SHELF,
  ADD_REVIEW_TO_BOOK,
} from "./actions";

export const setBooks = (books) => ({
  type: SET_BOOKS,
  books,
});

export const addReviewToBook = (review, rate, id) => {
  return {
    type: ADD_REVIEW_TO_BOOK,
    review: { review, rate, id: v4() },
    id,
  };
};

export const addShelf = (name, categories) => ({
  type: ADD_SHELF,
  shelf: {
    id: v4(),
    name,
    categories,
    books: [],
    reviews: [],
  },
});

export const addBookToShelf = (shelf_id, book_id) => ({
  type: ADD_BOOK_TO_SHELF,
  shelf_id,
  book_id,
});

export const addReviewToShelf = (review, rate, shelf_id) => ({
  type: ADD_REVIEW_TO_SHELF,
  review: { review, rate, id: v4() },
  shelf_id,
});
