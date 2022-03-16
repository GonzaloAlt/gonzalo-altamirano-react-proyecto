import React, { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { getProduct } from "../Helpers/APICall";

export const ItemDetailContainer = ({ id, showModal }) => {
  const [productId, setProductId] = useState(false);
  useEffect(() => {
    getProduct(id).then((response) => setProductId(response));
  }, []);

  return (
    <div>
      <ItemDetail product={productId} showModal={showModal} />
    </div>
  );
};
