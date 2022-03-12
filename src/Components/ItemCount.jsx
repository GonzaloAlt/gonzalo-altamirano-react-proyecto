import React, { useState } from "react";

export const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  const onAdd = () => {
    if (count < stock) setCount(count + 1);
  };
  const onSubtract = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
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
  );
};
export default ItemCount;
