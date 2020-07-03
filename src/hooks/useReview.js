import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  addReviewToBook,
  addReviewToShelf,
} from "../redux/actions/actionCreators";

export default (type, id) => {
  const dispatch = useDispatch();

  const [review, setReview] = useState("");
  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = () => {
    if (review) {
      if (type === "book") {
        dispatch(addReviewToBook(review, id));
      } else {
        dispatch(addReviewToShelf(review, id));
      }
      alert("Added");
    } else {
      alert("No review to add");
    }
  };
  return [review, handleReviewChange, handleSubmit];
};
