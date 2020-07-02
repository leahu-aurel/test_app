import { ADD_SHELF, ADD_BOOK_TO_SHELF } from "../actions/actions";

export default (state = {}, { type, shelf, shelf_id, book_id }) => {
  switch (type) {
    case ADD_SHELF:
      return { ...state, [shelf.id]: shelf };
    case ADD_BOOK_TO_SHELF:
      const { name, categories, books } = state[shelf_id];
      return {
        ...state,
        [shelf_id]: {
          name,
          categories,
          books: [...books, book_id],
        },
      };
    default:
      return state;
  }
};
