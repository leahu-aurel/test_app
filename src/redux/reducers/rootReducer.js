import { combineReducers } from "redux";
import books from "./booksReducer";
import shelves from "./shelvesReducer";

export default combineReducers({ books, shelves });
