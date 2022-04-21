import React, { useContext } from "react";
import { FavouritesContext } from "../Context/FavouritesContext";
import { HeartIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export const Favourites = () => {
  const { favourites, removeFromFavourites } = useContext(FavouritesContext);

  return (
    <>
      <h2 className="text-3xl lg:text-5xl font-bold pb-6 text-black m-auto pt-[5%]">
        Mis Favoritos
      </h2>
      <div className="mx-auto px-[15%] pb-[5%]">
        <ul className="flex flex-row flex-wrap justify-between">
          {favourites.length > 0 ? (
            favourites.map((product) => (
              <li className=" px-6">
                <div className="my-6 ">
                  <div className="max-w-sm rounded-sm border border-gray-100 bg-white shadow-lg min-h-[300px]">
                    <div
                      onClick={() => removeFromFavourites(product.id)}
                      className="text-right p-4 flex flex-row justify-end cursor-pointer"
                    >
                      <div className="text-xs text-gray-500 tracking-widest uppercase px-2">
                        Quitar de
                      </div>
                      <HeartIcon
                        className="w-4 h-4 mr-2 stroke-[#ffd050]"
                        fill="#ffd050"
                      />
                    </div>

                    <div className="flex items-center relative mb-10">
                      <div className="border-t border-gray-200 z-20 w-full"></div>

                      <div className="rounded-full bg-white z-30 p-2 inline-block absolute mx-8 border border-gray-100">
                        <img
                          className="fill-current text-white inline-block h-16 w-16"
                          src={product.img}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="px-8 pb-4">
                      <h4 className="text-gray-500 text-sm font-light">
                        The Dude Shop
                      </h4>
                      <h2 className="text-gray-800 text-xl font-bold">
                        {product.name}
                      </h2>
                      <p className="text-gray-600 text-xs">{product.detail}</p>
                    </div>
                    <Link to={`/item/${product.id}`}>
                      <div className="text-left py-4 px-8">
                        <span className="text-xs text-gray-500">
                          Ver en tienda
                        </span>
                      </div>
                    </Link>
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
