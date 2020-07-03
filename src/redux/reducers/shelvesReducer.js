import {
  ADD_SHELF,
  ADD_BOOK_TO_SHELF,
  ADD_REVIEW_TO_SHELF,
} from "../actions/actions";

export default (state = {}, { type, shelf, shelf_id, book_id, review }) => {
  switch (type) {
    case ADD_SHELF:
      return { ...state, [shelf.id]: shelf };

    case ADD_REVIEW_TO_SHELF:
      return {
        ...state,
        [shelf_id]: {
          ...state[shelf_id],
          reviews: [review, ...state[shelf_id].reviews],
        },
      };

    case ADD_BOOK_TO_SHELF:
      const { books } = state[shelf_id];

      return {
        ...state,
        [shelf_id]: {
          ...state[shelf_id],
          books: [...books, book_id],
        },
      };
    default:
      return state;
  }
};
