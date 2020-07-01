import React from "react";
import NavBar from "./components/navbar/navbar";
import Books from "./components/books/books";
import IndividualBook from "./components/books/bookPage";
import Shelves from "./components/shelves/shelves";
import Create from "./components/shelves/create";

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
      <Route exact path="/shelves/create">
        <Create />
      </Route>
      <Route exact path="/:id">
        <IndividualBook />
      </Route>
    </Switch>
  </>
);
