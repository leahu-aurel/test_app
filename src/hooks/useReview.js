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

  const [rate, setRate] = useState(0);
  const handleRateChange = (e) => {
    const { value } = e.target;
    console.log(value);
    if (!(value < 0 || value > 5)) {
      console.log(value);
      setRate(value);
    }
  };

  const handleSubmit = () => {
    if (review && rate) {
      if (type === "book") {
        console.log(type);
        dispatch(addReviewToBook(review, rate, id));
      } else {
        dispatch(addReviewToShelf(review, rate, id));
      }
      alert("Added");
    } else {
      alert("Not enough data to add the review");
    }
  };
  return [review, handleReviewChange, rate, handleRateChange, handleSubmit];
};
