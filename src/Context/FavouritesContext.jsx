import { createContext } from "react";
import { useState } from "react";
import { swalAddFavs } from "../Helpers/swalModals";
export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (item) => {
    setFavourites([...favourites, item]);
    // swalAddFavs();
  };
  const removeFromFavourites = (id) => {
    return setFavourites(favourites.filter((item) => item.id !== id));
  };
  const isProductInFavourites = (id) => {
    return favourites.some((item) => item.id === id);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        removeFromFavourites,
        addToFavourites,
        isProductInFavourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
