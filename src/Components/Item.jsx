import ItemCount from "./ItemCount";
import { CartButton } from "./CartButton";
import { useState } from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  const { id, name, img, price, offer, stock } = product;
  const [visibility, setVisibility] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [fillLike, setFillLike] = useState("#ffffff");

  function handleMouseEnter() {
    setVisibility(true);
    setIsHover(true);
  }
  function handleMouseLeave() {
    setVisibility(false);
    setIsHover(false);
  }
  function colorLike() {
    fillLike !== "#ffd050" ? setFillLike("#ffd050") : setFillLike("#ffffff");
  }

  return (
    <>
      <div
        className="sm:w-4/12 sm:px-6 xl:w-1/4  xl:px-16 py-6 "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full">
          {offer ? (
            <div className=" relative z-40 flex flex-row justify-between items-center">
              <h4 className="absolute bg-[#ffd050] rounded-full p-2 left-0">
                -{offer}%
              </h4>
              <HeartIcon
                className={
                  visibility
                    ? "absolute w-5 h-5 right-0 stroke-[#ffd050]"
                    : "absolute w-5 h-5 right-0 stroke-[#ffd050] invisible"
                }
                onClick={colorLike}
                fill={fillLike}
              />
            </div>
          ) : (
            <div className=" relative z-40 flex flex-row justify-between items-center">
              <HeartIcon
                className={
                  visibility
                    ? "absolute w-5 h-5 right-0 stroke-[#ffd050]"
                    : "absolute w-5 h-5 right-0 stroke-[#ffd050] invisible"
                }
                onClick={colorLike}
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
        <h3 className="font-bold text-gray-500 text-center py-1 font-sans">
          {name}
        </h3>
        <h3 className="font-bold text-gray-700 text-center py-1 font-mono">
          ${price}
        </h3>
        <div className={visibility ? "" : "invisible"}>
          <ItemCount stock={stock} itemCountStyle={true} />
          <CartButton cartButtonStyle={true} />
        </div>
      </div>
    </>
  );
};
