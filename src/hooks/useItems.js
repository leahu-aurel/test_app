import { useDispatch } from "react-redux";
import { setBooks } from "../redux/actions/actionCreators";
import { useEffect, useState } from "react";

export default (books) => {
  const [isFetching, setFetching] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!books.length) {
      const url = "https://google-books.p.rapidapi.com/volumes";
      const options = {
        headers: {
          "x-rapidapi-host": "google-books.p.rapidapi.com",
          "x-rapidapi-key":
            "b216306191msh96d2e40b242e753p14faacjsnfc0c5098018f",
          useQueryString: true,
        },
      };

      setFetching(true);
      fetch(url, options)
        .then((res) => res.json())
        .then(({ items }) => {
          dispatch(setBooks(items));
          setFetching(false);
        });
    }
  }, [dispatch, books]);

  return [isFetching];
};
