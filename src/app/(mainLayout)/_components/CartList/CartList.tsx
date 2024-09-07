"use client";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import CartTotal from "../CartTotal/CartTotal";

const CartList = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  let content = null;
  if (cartItems?.length > 0) {
    content = cartItems?.map((item) => (
      <CartItem key={item?._id} item={item}></CartItem>
    ));
  }
  if (cartItems?.length === 0)
    content = (
      <div className="text-center text-2xl">
        There is no Product in your Cart
      </div>
    );
  return (
    <div className="font-sans max-w-6xl max-lg:max-w-3xl mx-auto bg-white p-4">
      <div>
        <div className="bg-gray-100 p-6 rounded-md">
          <h2 className="text-2xl font-extrabold text-gray-800">Your Cart</h2>
          <div className="space-y-4 mt-8">{content}</div>
        </div>
      </div>
      <CartTotal></CartTotal>
    </div>
  );
};

export default CartList;
