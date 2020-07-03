import { useDispatch } from "react-redux";
import { setBooks } from "../redux/actions/actionCreators";
import { books } from "../data/books";

export default (booksRef) => {
  const dispatch = useDispatch();
  if (!Object.values(booksRef).length) {
    dispatch(setBooks(books));
  }
  // Fetching alternative
  // useEffect(() => {
  //   if (!booksRef.length) {
  //     const url = "https://google-books.p.rapidapi.com/volumes";
  //     const options = {
  //       headers: {
  //         "x-rapidapi-host": "google-books.p.rapidapi.com",
  //         "x-rapidapi-key":
  //           "b216306191msh96d2e40b242e753p14faacjsnfc0c5098018f",
  //         useQueryString: true,
  //       },
  //     };

  //     setFetching(true);
  //     fetch(url, options)
  //       .then((res) => res.json())
  //       .then(({ items }) => {
  //         dispatch(setBooks(items));
  //         setFetching(false);
  //       });
  //   }
  // }, [dispatch, books]);
};
