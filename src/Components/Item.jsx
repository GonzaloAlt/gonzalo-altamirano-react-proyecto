import ItemCount from "./ItemCount";
import { CartButton } from "./CartButton";
import { useState, useContext, useEffect } from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { FavouritesContext } from "../Context/FavouritesContext";

export const Item = ({ product }) => {
  const { id, name, img, price, offer, stock, detail, style } = product;
  const [visibility, setVisibility] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [fillLike, setFillLike] = useState("#ffffff");
  const [isFav, setIsFav] = useState("");
  const [count, setCount] = useState(1);
  const { addToCart, isProductInCart, addToExistingProd, limitStock } =
    useContext(CartContext);
  const {
    favourites,
    addToFavourites,
    removeFromFavourites,
    isProductInFavourites,
  } = useContext(FavouritesContext);

  useEffect(() => {
    isProductInFavourites(id) ? setFillLike("#ffd050") : setFillLike("#ffffff");
  }, [favourites]);

  function handleMouseEnter() {
    setVisibility(true);
    setIsHover(true);
  }
  function handleMouseLeave() {
    setVisibility(false);
    setIsHover(false);
  }

  const item = {
    id,
    img,
    name,
    price,
    count,
    stock,
    detail,
    style,
  };
  const pushToCart = async () => {
    if (!isProductInCart(id)) addToCart(item);
    if (isProductInCart(id) && (await limitStock(item)))
      addToExistingProd(item);
  };
  const toggleFavourites = () => {
    !isProductInFavourites(id)
      ? addToFavourites(item)
      : removeFromFavourites(id);
  };
  const setFavAnimation = () => {
    setIsFav("animate-beat");
    setTimeout(() => {
      setIsFav("");
    }, 220);
  };

  return (
    <>
      <div
        className="sm:w-4/12 sm:px-6 xl:w-1/4  xl:px-16 py-6 "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full">
          {offer ? (
            <div className=" relative z-40 flex flex-row justify-between items-center ">
              <h4
                className={
                  isHover
                    ? "absolute bg-[#ffd050] rounded-full p-2 left-0 animate-bounce"
                    : "absolute bg-[#ffd050] rounded-full p-2 left-0"
                }
              >
                -{offer}%
              </h4>
              <HeartIcon
                className={
                  visibility
                    ? `absolute w-5 h-5 right-0 stroke-[#ffd050] ${isFav}`
                    : "absolute w-5 h-5 right-0 stroke-[#ffd050] invisible"
                }
                onClick={() => {
                  toggleFavourites();
                  setFavAnimation();
                }}
                fill={fillLike}
              />
            </div>
          ) : (
            <div className=" relative z-40 flex flex-row justify-between items-center">
              <HeartIcon
                className={
                  visibility
                    ? `absolute w-5 h-5 right-0 stroke-[#ffd050] ${isFav}`
                    : "absolute w-5 h-5 right-0 stroke-[#ffd050] invisible"
                }
                onClick={() => {
                  toggleFavourites();
                  setFavAnimation();
                }}
                fill={fillLike}
              />
            </div>
          )}
          <Link to={`/item/${id}`}>
            {" "}
            <img
              src={img}
              alt=""
              className={isHover ? "opacity-90 cursor-pointer" : ""}
            />
          </Link>
        </div>
        <h3 className=" font-medium text-gray-800 text-center py-1 font-sans">
          {name}
        </h3>
        <h3 className="text-gray-500 text-sm font-light text-center py-1">
          ${price}
        </h3>
        <div className={visibility ? "" : "invisible"}>
          <ItemCount
            stock={stock}
            id={id}
            itemCountStyle={true}
            count={count}
            setCount={setCount}
          />
          <CartButton cartButtonStyle={true} addToCart={pushToCart} />
        </div>
      </div>
    </>
  );
};
