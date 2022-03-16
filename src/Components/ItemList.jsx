import React from "react";
import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return (
    <>
      {products ? (
        products.map((product) => <Item key={product.id} product={product} />)
      ) : (
        <div>No se pudieron cargar los productos</div>
      )}
    </>
  );
};
