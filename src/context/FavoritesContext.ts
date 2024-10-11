import { createContext } from "react";
import Gif from "../models/Gif";

interface FavoritesContextModel {
  favorites: Gif[];
  addFav: (gif: Gif) => void;
  removeFav: (id: string) => void;
  isItAFav: (id: string) => boolean;
}

const defaultValues: FavoritesContextModel = {
  favorites: [],
  addFav: () => {},
  removeFav: () => {},
  isItAFav: () => false,
};

const FavoritesContext = createContext(defaultValues);

export default FavoritesContext;
