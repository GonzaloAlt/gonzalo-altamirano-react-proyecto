import { ShoppingCartIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { useContext, useEffect, useState } from "react";

function CartWidget() {
  const { cart } = useContext(CartContext);
  const [effect, setEffect] = useState("");

  useEffect(() => {
    setEffect("");
    setTimeout(() => {
      setEffect("animate-wiggle");
    }, 100);
  }, [cart]);

  return (
    <>
      <Link to={"/cart"}>
        <div
          className={`relative z-40 flex flex-row justify-between items-center ${effect}`}
        >
          {cart.length > 0 && (
            <h4 className="absolute bg-[#ffd050] rounded-full px-[6px] right-0 text-[10px] translate-y-[-15px]">
              {cart.map((item) => item.count).reduce((pv, cv) => pv + cv, 0)}
            </h4>
          )}

          <button
            type="button"
            className="bg-red-rug-900 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white block"
          >
            <span className="sr-only">View Shopping Cart</span>
            <ShoppingCartIcon
              className="h-6 w-6 stroke-white "
              aria-hidden="true"
            />
          </button>
        </div>
      </Link>
    </>
  );
}

export default CartWidget;
