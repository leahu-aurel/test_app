import { createStore } from "redux";
import root from "./reducers/rootReducer";

let initialState = JSON.parse(localStorage.getItem("state")) || {};

const store = createStore(root, initialState);
store.subscribe(() =>
  localStorage.setItem("state", JSON.stringify(store.getState()))
);
export default store;
