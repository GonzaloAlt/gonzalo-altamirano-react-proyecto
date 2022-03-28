import React, { useContext } from "react";
import { FavouritesContext } from "../Context/FavouritesContext";
import { TrashIcon } from "@heroicons/react/outline";

export const Favourites = () => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <>
      <h2>Favoritos en construcción</h2>
      <div className="m-auto px-[15%]">
        <ul className="flex flex-row flex-wrap justify-between">
          {favourites.length > 0 ? (
            favourites.map((product) => (
              <li
                key={product.id}
                className="flex flex-1 py-6 flex-wrap px-6 max-w-[200px]"
              >
                <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.img}
                    alt=""
                    className="h-full w-full object-cover object-center bg-white"
                  />
                </div>

                <div className=" flex flex-1 flex-col">
                  <div className="flex justify-between sm:text-lg font-medium text-gray-500">
                    <h3>{product.name}</h3>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-md">
                    <p className="text-gray-500">Ver en tienda</p>
                    <TrashIcon
                      className="w-5 h-5"
                      fill="#a33828"
                      stroke="white"
                    />
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li>No hay productos</li>
          )}
        </ul>
      </div>
    </>
  );
};
