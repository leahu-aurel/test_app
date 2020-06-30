import React from "react";
import NavBar from "./components/navbar/navbar";
import Books from "./components/books/books";
import Shelves from "./components/shelves/shelves";
import { Route, Switch } from "react-router-dom";

export default () => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/(|books)">
        <Books />
      </Route>
      <Route exact path="/shelves">
        <Shelves />
      </Route>
    </Switch>
  </>
);
