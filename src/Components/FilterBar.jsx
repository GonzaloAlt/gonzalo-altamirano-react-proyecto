import React from "react";
import { sortProductsMin, sortProductsMax } from "../Helpers/filters";

export const FilterBar = ({ products }) => {
  return (
    <div className="flex justify-end sm:px-[20%] pt-10">
      <span className="pr-2 py-1.5">Filtrar por:</span>
      <div className="mb-3 xl:w-96">
        <select
          className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-red-rug-500 focus:outline-none"
          aria-label="Default select example"
        >
          <option defaultValue>Seleccione la opción</option>
          <option value="1">A-Z</option>
          <option value="2">Z-A</option>
          <option value="3">Menor a mayor precio</option>
          <option value="4">Mayor a menos precio</option>
        </select>
      </div>
    </div>
  );
};
