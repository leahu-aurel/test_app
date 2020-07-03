import { useSelector } from "react-redux";

export default (id, category) => {
  let shelves = useSelector((state) => state.shelves);
  const filteredShelves = Object.values(shelves).filter(
    ({ books, categories }) => {
      if (books.includes(id)) {
        return false;
      }
      if (categories.length) {
        return categories.includes(category);
      } else {
        return true;
      }
    }
  );
  return filteredShelves;
};
