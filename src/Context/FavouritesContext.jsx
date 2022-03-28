import { createContext } from "react";
import { useState } from "react";
export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (item) => {
    setFavourites([...favourites, item]);
  };
  const removeFromFavourites = (id) => {
    return setFavourites(favourites.filter((item) => item.id !== id));
  };

  return <FavouritesContext.Provider>{children}</FavouritesContext.Provider>;
};
