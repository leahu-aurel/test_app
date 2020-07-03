import { SET_BOOKS, ADD_REVIEW_TO_BOOK } from "../actions/actions";

export default (state = {}, { type, books, id, review }) => {
  switch (type) {
    case SET_BOOKS:
      return books;
    case ADD_REVIEW_TO_BOOK:
      return {
        ...state,
        [id]: {
          ...state[id],
          reviews: [review, ...state[id].reviews],
        },
      };

    default:
      return state;
  }
};
