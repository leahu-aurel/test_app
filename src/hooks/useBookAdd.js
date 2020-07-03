import { useDispatch } from "react-redux";
import { useState } from "react";
import { addBookToShelf } from "../redux/actions/actionCreators";

export default (id) => {
  const dispatch = useDispatch();

  const [chosenShelf, setShelf] = useState("");
  const handleShelfChange = (e) => {
    setShelf(e.target.value);
  };

  const handleSubmit = () => {
    if (chosenShelf) {
      dispatch(addBookToShelf(chosenShelf, id));
      alert("Added");
    } else {
      alert("No shelves chosen");
    }
  };
  return [chosenShelf, handleShelfChange, handleSubmit];
};
