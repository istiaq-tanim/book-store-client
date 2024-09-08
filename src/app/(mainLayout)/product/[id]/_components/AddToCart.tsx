"use client";

import { BookItem } from "@/app/(mainLayout)/_components/BookCardList/BookCardList";
import { addItem } from "@/app/redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const AddToCart = ({ product }: { product: BookItem }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product: BookItem) => {
    dispatch(addItem(product));
  };
  return (
    <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5">
      <button
        onClick={() => handleAddToCart(product)}
        className="bg-primary border border-primary text-white px-8 py-4 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
      >
        <i className="fa-solid fa-bag-shopping"></i> Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
