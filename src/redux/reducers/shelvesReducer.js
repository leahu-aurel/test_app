import { ADD_SHELF } from "../actions/actions";

export default (state = [], { type, shelf }) => {
  switch (type) {
    case ADD_SHELF:
      return [...state, shelf];
    default:
      return state;
  }
};
