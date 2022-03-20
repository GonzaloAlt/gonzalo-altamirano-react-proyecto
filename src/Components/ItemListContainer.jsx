import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { Loading } from "./Loading";
import { getProductList } from "../Helpers/APICall";
import { asyncMockProduct } from "../Helpers/asyncMock";
import { useParams } from "react-router-dom";
import { FilterBar } from "./FilterBar";

function ItemListContainer(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [show, setShow] = useState(true);
  const [products, setProducts] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    setIsLoaded(false);
    asyncMockProduct(show)
      .then(() => {
        setIsLoaded(true);
        getProductList().then((response) => {
          !category
            ? setProducts(response)
            : setProducts(
                response.filter(
                  (res) => res[category] || res.itemType === category
                )
              );
        });
      })
      .catch((e) => {
        setShow(false);
        console.log(e);
        setIsLoaded(true);
      });
  }, [category]);

  return (
    <>
      {isLoaded ? (
        <div className="mx-12 lg:mx-2">
          <FilterBar />
          <h2 className="text-center my-10 mt-20 text-4xl tracking-tight font-bold text-gray-900 sm:text-2xl md:text-4xl">
            {/* Bienvenido <span className="text-red-rug-600">{props.name}</span> */}
          </h2>
          <div>
            {show ? (
              <ItemList products={products} />
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
}

export default ItemListContainer;
