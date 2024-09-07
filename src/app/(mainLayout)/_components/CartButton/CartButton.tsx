"use client";
import { addItem } from "@/app/redux/features/cart/cartSlice";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { BookItem } from "../BookCardList/BookCardList";

const CartButton = ({ product }: { product: BookItem }) => {
  const dispatch = useDispatch();
  const handleAdd = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    product: BookItem
  ) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addItem(product));
  };
  return (
    <div>
      <ShoppingCart
        onClick={(event) => handleAdd(event, product)}
        size={26}
        strokeWidth={2}
        className="text-gray-800"
      />
    </div>
  );
};

export default CartButton;
