"use client";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";

const CartList = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="font-sans max-w-6xl max-lg:max-w-3xl mx-auto bg-white p-4">
      <div>
        <div className="bg-gray-100 p-6 rounded-md">
          <h2 className="text-2xl font-extrabold text-gray-800">Your Cart</h2>
          <div className="space-y-4 mt-8">
            {cartItems?.map((item) => (
              <CartItem key={item?._id} item={item}></CartItem>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
        <ul className="text-gray-800 mt-8 space-y-4">
          <li className="flex flex-wrap gap-4 text-base">
            Shipping <span className="ml-auto font-bold">$2.00</span>
          </li>
          <li className="flex flex-wrap gap-4 text-base">
            Tax <span className="ml-auto font-bold">$4.00</span>
          </li>
          <li className="flex flex-wrap gap-4 text-base font-bold">
            Total <span className="ml-auto">$52.00</span>
          </li>
        </ul>

        <div className="mt-8 space-y-2">
          <button
            type="button"
            className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
