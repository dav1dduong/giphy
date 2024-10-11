import { useContext } from "react";
import "./Favorites.css";
import FavoritesContext from "../context/FavoritesContext";
import Result from "./Result";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  console.log(favorites);

  return (
    <div className="Favorites">
      {favorites.map((fav) => (
        <Result singleGif={fav} key={fav.id} />
      ))}
    </div>
  );
};

export default Favorites;
