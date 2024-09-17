"use client";

import { getTotal } from "@/app/redux/features/cart/cartSlice";
import { RootState } from "@/app/redux/store";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartTotal = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
      <ul className="text-gray-800 mt-8 space-y-4">
        <li className="flex flex-wrap gap-4 text-base">
          Shipping <span className="ml-auto font-bold">$10.00</span>
        </li>
        <li className="flex flex-wrap gap-4 text-base">
          Total <span className="ml-auto font-bold">${cart.totalAmount}</span>
        </li>
        <li className="flex flex-wrap gap-4 text-base font-bold">
          Sub-Total <span className="ml-auto">${cart.totalAmount + 10}</span>
        </li>
      </ul>

      <div className="mt-8 space-y-2">
        <Link href="/checkOut">
          <button
            type="button"
            className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            Proceed To Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartTotal;
