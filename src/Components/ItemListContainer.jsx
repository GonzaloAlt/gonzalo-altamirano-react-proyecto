import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";

function ItemListContainer(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [show, setShow] = useState(true);

  const asyncMockProduct = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (show) {
          res();
        } else {
          rej("No hay productos disponibles para mostrar");
        }
      }, 2000);
    });
  };

  useEffect(() => {
    asyncMockProduct()
      .then(() => {
        setIsLoaded(true);
        setShow(true);
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
        <div className="mx-12 lg:mx-2">
          <h2 className="text-center my-10 mt-20 text-2xl tracking-tight font-bold text-gray-900 sm:text-2xl md:text-4xl">
            Bienvenido, <span className="text-red-rug-600">{props.name}</span>
          </h2>
          <div className="flex flex-row justify-start flex-wrap items-center">
            {show ? (
              <ItemList />
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
        <div className="flex justify-center my-40">
          {" "}
          <div className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-rug-900 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
            <svg
              role="status"
              className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#ffd050"
              />
            </svg>
            Cargando...
          </div>
        </div>
      )}
    </>
  );
}

export default ItemListContainer;

// <div className="flex justify-center items-center my-20">
// <svg
//   role="status"
//   className="mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
//   viewBox="0 0 100 101"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <path
//     d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//     fill="currentColor"
//   />
//   <path
//     d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//     fill="currentFill"
//   />
// </svg>
// <h3 className="p-4">Loading...</h3>
// </div>
