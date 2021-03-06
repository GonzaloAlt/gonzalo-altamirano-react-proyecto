import { useContext, useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { Loading } from "./Loading";
import { getDBProductList, getDBCategory } from "../Helpers/DBget";
import { useParams } from "react-router-dom";
import { FilterBar } from "./FilterBar";
import { SideBarCart } from "./SideBarCart";
import { CartContext } from "../Context/CartContext";
import { sortProduct } from "../Helpers/filters";

function ItemListContainer(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [show, setShow] = useState(true);
  const [products, setProducts] = useState(false);
  const [filter, setFilter] = useState(false);
  const { category } = useParams();
  const { cart } = useContext(CartContext);
  const param = JSON.parse(filter);

  useEffect(() => {
    setIsLoaded(false);
    (!category
      ? getDBProductList().then((response) =>
          setProducts(sortProduct(response, param.property, param.maxmin))
        )
      : getDBCategory(category).then((response) => {
          setProducts(sortProduct(response, param.property, param.maxmin));
        })
    )
      .catch((e) => {
        setShow(false);
        console.log(e);
      })
      .finally(
        setTimeout(() => {
          setIsLoaded(true);
        }, 3000)
      );
  }, [category, filter, param.maxmin, param.property]);

  return (
    <>
      {isLoaded ? (
        <>
          {show ? (
            <div className="flex flex-row">
              <div className="mx-12 lg:mx-2">
                <div className=" hidden sm:flex mt-10 h-40 bg-[#febe14] w-[65%] m-auto overflow-hidden flex flex-col content-center justify-center rounded-md ">
                  <img
                    className="object-fill w-full box-border p-6 translate-y-2"
                    src="https://i.imgur.com/0iTaY55.gif"
                    alt=""
                  />
                </div>
                <FilterBar changeFilter={(filter) => setFilter(filter)} />
                <div className="my-10 mt-20">
                  <ItemList products={products} />
                </div>
              </div>
              {cart.length > 0 && (
                <div className="hidden lg:block absolute right-0  h-screen w-[15%] overflow-hidden mt-64 pr-[1%]">
                  <SideBarCart products={products} />
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-center text-center text-gray-500 my-40  sm:text-lg sm:max-w-xl sm:mx-auto  md:text-xl ">
              <h2>
                Lo sentimos, no tenemos productos para mostrar en este momento
              </h2>
            </div>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ItemListContainer;
