import React from "react";
import useItems from "../../hooks/useItems";
import { useSelector } from "react-redux";

export default () => {
  const books = useSelector((state) => state.books);
  const [isFetching] = useItems(books);
  console.log(
    books.forEach((item) => {
      const { id, volumeInfo } = item;
      console.log(id);
      console.log(volumeInfo);
    })
  );
  return <div>{isFetching || !books ? "Loading " : ""}Books</div>;
};
