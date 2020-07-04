import { combineReducers } from "redux";
import books from "./booksReducer";
import shelves from "./shelvesReducer";
import mode from "./modeReducer";

export default combineReducers({ books, shelves, mode });
