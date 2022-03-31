import React, { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { getDBProduct } from "../Helpers/APICall";
import { Loading } from "./Loading";
import { useParams } from "react-router-dom";
import { Page404 } from "./Page404";

export const ItemDetailContainer = () => {
  const [productId, setProductId] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [show, setShow] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    getDBProduct(itemId)
      .then((response) => {
        response ? setProductId(response) : setShow(false);
        setIsLoaded(true);
      })
      .catch((e) => {
        setShow(false);
        console.log(e);
        setIsLoaded(true);
      });
  }, []);

  return (
    <>
      {isLoaded ? (
        <div>
          <div>{show ? <ItemDetail product={productId} /> : <Page404 />}</div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
