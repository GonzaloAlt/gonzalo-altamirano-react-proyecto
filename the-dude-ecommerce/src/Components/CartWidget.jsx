import { ShoppingCartIcon } from "@heroicons/react/outline";
function CartWidget() {
  return (
    <>
      <button
        type="button"
        className="bg-red-rug-900 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white block"
      >
        <span className="sr-only">View Shopping Cart</span>
        <ShoppingCartIcon className="h-6 w-6 stroke-white" aria-hidden="true" />
      </button>
    </>
  );
}

export default CartWidget;
