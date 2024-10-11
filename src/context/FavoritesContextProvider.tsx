import { ReactNode, useState } from "react";
import FavoritesContext from "./FavoritesContext";
import Gif from "../models/Gif";

interface Props {
  children: ReactNode;
}

const FavoritesContextProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<Gif[]>([]);

  // callback prop - add a favorite
  const addFav = (gif: Gif): void => {
    setFavorites((prev) => [...prev, gif]);
  };

  const removeFav = (id: string): void => {
    const foundIndex = favorites.findIndex((fav) => fav.id === id);
    setFavorites((prev) => {
      let copy = prev.slice(0);
      copy.splice(foundIndex, 1);
      return copy;
    });
  };

  const isItAFav = (id: string): boolean => {
    return favorites.some((fav) => fav.id === id);
  };
  return (
    <FavoritesContext.Provider
      value={{
        favorites: favorites,
        addFav: addFav,
        removeFav: removeFav,
        isItAFav: isItAFav,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
