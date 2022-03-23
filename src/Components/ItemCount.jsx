import React, { useEffect, useState } from "react";

export const ItemCount = ({ stock, count, setCount, itemCountStyle }) => {
  const [renderStyle, setRenderStyle] = useState(true);

  const onAdd = () => {
    if (count < stock) setCount(count + 1);
  };
  const onSubtract = () => {
    if (count > 1) setCount(count - 1);
  };
  useEffect(() => {
    setRenderStyle(itemCountStyle);
  }, []);

  return (
    <>
      {renderStyle ? (
        <div className="inline-flex w-full justify-between bg-slate-100 items-center">
          <button
            onClick={onSubtract}
            className="bg-red-rug-600 hover:bg-red-rug-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            -
          </button>
          <div className="text-center w-20">
            {stock !== 0 ? count : "Sin Stock"}
          </div>

          <button
            onClick={onAdd}
            className="bg-red-rug-600 hover:bg-red-rug-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            +
          </button>
        </div>
      ) : (
        <div className="flex flex-row justify-stretch">
          <button
            onClick={onSubtract}
            className="w-[30px]  rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base"
          >
            -
          </button>
          <div className="w-[40px] text-center rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base">
            {stock !== 0 ? count : "Sin Stock"}
          </div>

          <button
            onClick={onAdd}
            className="w-[30px]  rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base"
          >
            +
          </button>
        </div>
      )}
    </>
  );
};
export default ItemCount;
