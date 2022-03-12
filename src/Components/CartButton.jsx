import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";

export const CartButton = () => {
  return (
    <button className="inline-flex justify-center items-center bg-red-rug-700  hover:bg-red-rug-600 text-white  py-2 px-4 my-2 rounded w-full">
      Agregar al carrito
      <ShoppingCartIcon
        className="h-6 w-6 stroke-white mx-2"
        aria-hidden="true"
      />
    </button>
  );
};
