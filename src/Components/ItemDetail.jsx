import React from "react";

export const ItemDetail = ({ product, showModal }) => {
  return (
    <div className="flex justify-center">
      <div>
        {/*className="absolute pt-60 z-50"  */}
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div>
            <img className="rounded-t-lg" src={product.img} alt="" />
          </div>
          <div className="p-5 bg-[#ffd050]">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                {product.name}
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {product.detail}
            </p>
            <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
              ${product.price}
            </p>
            <button
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-rug-700 rounded-lg hover:bg-red-rug-900 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => showModal(false)}
            >
              Volver
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
