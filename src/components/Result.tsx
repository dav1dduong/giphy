import { Link } from "react-router-dom";
import Gif from "../models/Gif";
import "./Result.css";
import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";

interface Props {
  singleGif: Gif;
}

const Result = ({ singleGif }: Props) => {
  const { addFav } = useContext(FavoritesContext);
  const { removeFav } = useContext(FavoritesContext);
  const { isItAFav } = useContext(FavoritesContext);
  return (
    <div className="Result">
      <Link to={`/details/${encodeURIComponent(singleGif.id)}`}>
        <p>{singleGif.title}</p>
      </Link>
      <img src={singleGif.images.original.url} alt={singleGif.alt_text} />
      <a href={singleGif.url}>Check it out on Giphy!!</a>
      {isItAFav(singleGif.id) === false ? (
        <button onClick={() => addFav(singleGif)}>Add to favorites</button>
      ) : (
        <button onClick={() => removeFav(singleGif.id)}>
          Remove From Favorites
        </button>
      )}
    </div>
  );
};

export default Result;
