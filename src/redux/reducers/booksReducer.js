import { SET_BOOKS } from "../actions/actions";

export default (state = [], { type, books }) => {
  switch (type) {
    case SET_BOOKS:
      return books;
    default:
      return state;
  }
};
