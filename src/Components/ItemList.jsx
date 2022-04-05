import React from "react";
import { Item } from "./Item";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";

export const ItemList = ({ products }) => {
  const [itemsToShow, setitemsToShow] = useState(8);

  const showMore = () => {
    setitemsToShow(itemsToShow + 4);
  };

  return (
    <>
      <div className="flex flex-row justify-start flex-wrap items-center px-[15%]">
        {products ? (
          products
            .slice(0, itemsToShow)
            .map((product) => <Item key={product.id} product={product} />)
        ) : (
          <div className="flex justify-center text-center text-gray-500 my-40  sm:text-lg sm:max-w-xl sm:mx-auto  md:text-xl ">
            No se pudieron cargar los productos
          </div>
        )}
      </div>
      <div className="flex justify-center mb-20">
        {itemsToShow < products.length ? (
          <button
            onClick={() => showMore()}
            className="flex flex-row items-center  text-center text-center rounded border appearance-none border-gray-200 py-2 px-4 focus:outline-none focus:border-red-500 text-base hover:bg-gray-100"
          >
            Ver más
            <ChevronDownIcon className="w-5 h-5 ml-1" />
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
