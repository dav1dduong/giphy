import { useEffect, useState } from "react";
import "./Main.css";
import ResultList from "./ResultList";
import { GiphyResponse } from "../models/GiphyResponse";
import { getSearchTermGifs, getTrendingGifs } from "../services/GiphyServices";
import Gif from "../models/Gif";
import SearchForm from "./SearchForm";
import { useSearchParams } from "react-router-dom";

const Main = () => {
  const [searchParams] = useSearchParams();
  // console.log(queryParams);
  const term = searchParams.get("term");
  console.log(term);

  //create a state variable to hold the response
  const [gif, setGif] = useState<Gif[]>([]);
  // const [searchTerm, setSearchTerm] = useState(term);
  //call on our useEffect hook
  useEffect(() => {
    if (term) {
      getSearchTermGifs(term).then((res) => {
        setGif(res.data);
      });
    } else {
      //we will call our service function,
      // chaining our .then() method to then use the setState fn
      getTrendingGifs().then((res) => {
        setGif(res.data);
      });
    }
  }, [term]);
  return (
    <main className="Main">
      {/* ResultList takes in a prop of gifs = {gifs} which is the array of gifts from giphy */}
      <SearchForm />
      <ResultList arrayOfGifs={gif} />
    </main>
  );
};

export default Main;
