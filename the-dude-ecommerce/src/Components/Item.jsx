import React from "react";
import defaultImg from "../Imgs/patagonia-kune-sixpack-473.png";
import ItemCount from "./ItemCount";

export const Item = () => {
  const product = {
    name: "Patagonia Kune SixPack 473",
    img: defaultImg,
    precio: 1150,
    stock: 15,
  };
  return (
    //   Producto Hardcodeado
    <div className="sm:w-4/12 lg:w-2/12  px-6 py-6">
      <div className="w-full">
        <img src={product.img} alt="" />
      </div>
      <h3 className="font-bold text-gray-500 text-center py-1 font-sans">
        {product.name}
      </h3>
      <h3 className="font-bold text-gray-700 text-center py-1 font-mono">
        ${product.precio}
      </h3>
      <ItemCount stock={product.stock} />
    </div>
  );
};
