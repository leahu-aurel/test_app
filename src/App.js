import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";

function App() {
  const [items, setItems] = useState([]);
  const [isFetching, setFetching] = useState(false);
  useEffect(() => {
    const url = "https://google-books.p.rapidapi.com/volumes";
    const options = {
      headers: {
        "x-rapidapi-host": "google-books.p.rapidapi.com",
        "x-rapidapi-key": "b216306191msh96d2e40b242e753p14faacjsnfc0c5098018f",
        useQueryString: true,
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => console.log(data.items));
  }, []);
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
