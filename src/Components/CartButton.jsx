import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";

export const CartButton = ({ cartButtonStyle }) => {
  const [renderStyle, setRenderStyle] = useState(true);

  useEffect(() => {
    setRenderStyle(cartButtonStyle);
  }, []);

  return (
    <>
      {renderStyle ? (
        <button className="inline-flex justify-center items-center bg-red-rug-700  hover:bg-gradient-to-r from-red-rug-700 to-red-rug-500 text-white  py-2 px-4 my-2 rounded w-full">
          Agregar al carrito
          <ShoppingCartIcon
            className="h-6 w-6 stroke-white mx-2"
            aria-hidden="true"
          />
        </button>
      ) : (
        <button className="flex ml-auto text-white bg-red-rug-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-rug-500 rounded">
          Agregar
        </button>
      )}
    </>
  );
};
