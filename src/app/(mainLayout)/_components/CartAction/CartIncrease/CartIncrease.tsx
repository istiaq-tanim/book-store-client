"use client";

import { addItem, ICartItem } from "@/app/redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartIncrease = ({ product }: { product: ICartItem }) => {
  const dispatch = useDispatch();

  const handleIncrement = (product: ICartItem) => {
    dispatch(addItem(product));
  };
  return (
    <button onClick={() => handleIncrement(product)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-2.5 fill-current"
        viewBox="0 0 42 42"
      >
        <path
          d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
          data-original="#000000"
        ></path>
      </svg>
    </button>
  );
};

export default CartIncrease;
