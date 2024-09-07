"use client";

import { decrement } from "@/app/redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartDecrease = ({ id }: { id: string }) => {
  const dispatch = useDispatch();
  const handleDelete = (id: string) => {
    dispatch(decrement(id));
  };
  return (
    <button onClick={() => handleDelete(id)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-2.5 fill-current"
        viewBox="0 0 124 124"
      >
        <path
          d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
          data-original="#000000"
        ></path>
      </svg>
    </button>
  );
};

export default CartDecrease;
