import React, { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { getProduct } from "../Helpers/APICall";
import { asyncMockProduct } from "../Helpers/asyncMock";
import { Loading } from "./Loading";

export const ItemDetailContainer = ({ id, showModal }) => {
  const [productId, setProductId] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    asyncMockProduct(productId)
      .then(() => {
        setIsLoaded(true);
        setShow(true);
        getProduct(id).then((response) => setProductId(response));
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
          <div>
            {show ? (
              <ItemDetail product={productId} showModal={showModal} />
            ) : (
              <div className="flex justify-center text-center text-gray-500 my-40  sm:text-lg sm:max-w-xl sm:mx-auto  md:text-xl ">
                <h2>
                  Lo sentimos, no tenemos productos para mostrar en este momento
                </h2>{" "}
              </div>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
