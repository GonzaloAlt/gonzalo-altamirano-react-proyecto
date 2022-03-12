// import React, { useState } from "react";

import ItemCount from "./ItemCount";
import { CartButton } from "./CartButton";

export const Item = ({ product }) => {
  const { name, img, price, offer, stock } = product;

  return (
    <div className="sm:w-4/12 sm:px-6 xl:w-1/5  xl:px-16 py-9 ">
      <div className="w-full">
        {offer ? (
          <div className="absolute">
            <h4 className="bg-[#ffd050] rounded-full p-2 ">-{offer}%</h4>
          </div>
        ) : (
          <></>
        )}
        <img src={img} alt="" />
      </div>
      <h3 className="font-bold text-gray-500 text-center py-1 font-sans">
        {name}
      </h3>
      <h3 className="font-bold text-gray-700 text-center py-1 font-mono">
        ${price}
      </h3>
      <div>
        <ItemCount stock={stock} />
        <CartButton />
      </div>
    </div>
  );
};
