import { createContext } from "react";
import {
  swalSuccess,
  swalWarning,
  swalEmpty,
  swalDeleteSucces,
} from "../Helpers/swalModals";
import { getDBProductStock } from "../Helpers/DBget";
import { useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    const { name, count } = item;
    swalSuccess(name, count);
  };

  const removeFromCart = (id, name) => {
    swalDeleteSucces(name);
    return setCart(cart.filter((item) => item.id !== id));
  };

  const isProductInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const addToExistingProd = ({ id, count, name }) => {
    /*Función provisoria, REFACTORIZAR!!!*/
    const existingMatch = cart.filter((item) => item.id === id);
    existingMatch[0].count += count;
    let index = cart.indexOf(existingMatch);
    if (index !== -1) cart[index] = existingMatch[0];
    setCart([...cart]);
    swalSuccess(name, count);
  };

  const limitStock = async ({ id, count }) => {
    const countInCart = cart.filter((item) => item.id === id)[0].count;
    let stock = getDBProductStock(id);
    return countInCart + count <= (await stock) || swalWarning();
  };

  const clearCart = () => {
    swalEmpty();
    return setCart([]);
  };

  const getTotalAmount = () => {
    return cart
      .map((item) => item.count * item.price)
      .reduce((pv, cv) => pv + cv, 0);
  };
  const getTotalItems = () => {
    return cart.map((item) => item.count).reduce((pv, cv) => pv + cv, 0);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isProductInCart,
        removeFromCart,
        addToExistingProd,
        limitStock,
        clearCart,
        getTotalAmount,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
