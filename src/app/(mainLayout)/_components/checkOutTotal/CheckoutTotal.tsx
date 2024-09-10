"use client";

import { getTotal } from "@/app/redux/features/cart/cartSlice";
import { RootState } from "@/app/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CheckoutTotal = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);
  return (
    <div className="bg-white p-6 rounded-md max-lg:-order-1">
      <h3 className="text-lg font-bold text-gray-800">Summary</h3>
      <ul className="text-gray-800 mt-6 space-y-3">
        <li className="flex flex-wrap gap-4 text-sm">
          Sub total{" "}
          <span className="ml-auto font-bold">${cart?.totalAmount}</span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          Shipping <span className="ml-auto font-bold">$10</span>
        </li>
        <hr />
        <li className="flex flex-wrap gap-4 text-base font-bold">
          Total <span className="ml-auto">${cart.totalAmount + 10}</span>
        </li>
      </ul>
    </div>
  );
};

export default CheckoutTotal;
