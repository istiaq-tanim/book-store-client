import { ICartItem } from "@/app/redux/features/cart/cartSlice";
import Image from "next/image";

import CartDecrease from "../CartAction/CartDecrease/CartDecrease";
import CartIncrease from "../CartAction/CartIncrease/CartIncrease";
import CartRemoveButton from "../CartAction/CartRemove/CartRemoveButton";

const CartItem = ({ item }: { item: ICartItem }) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
          <Image
            src={item.image}
            className="w-full h-full object-contain"
            alt="cart-image"
            height={36}
            width={36}
          />
        </div>

        <div className="w-full">
          <h3 className="text-base font-semibold text-gray-800">
            {item?.title}
          </h3>
          <h6 className="text-sm text-gray-800 font-bold cursor-pointer mt-0.5">
            $
            {item?.price
              ? Number(item?.price ?? 0) * Number(item?.quantity ?? 0)
              : Number(item?.originalPrice ?? 0) * Number(item?.quantity ?? 0)}
          </h6>

          <div className="flex gap-4 mt-4">
            <div>
              <div className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                <CartDecrease id={item?._id}></CartDecrease>

                <span className="mx-2.5">{item?.quantity}</span>
                <CartIncrease product={item}></CartIncrease>
              </div>
            </div>

            <CartRemoveButton id={item?._id}></CartRemoveButton>
          </div>
        </div>
      </div>

      <hr className="border-gray-300" />
    </>
  );
};

export default CartItem;
