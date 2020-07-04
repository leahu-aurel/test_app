import { SET_MODE } from "../actions/actions";

export default (state = false, { type }) => {
  switch (type) {
    case SET_MODE:
      return !state;
    default:
      return state;
  }
};
