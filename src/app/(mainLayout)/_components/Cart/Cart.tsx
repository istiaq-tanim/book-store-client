"use client";

import { getTotal } from "@/app/redux/features/cart/cartSlice";
import { RootState } from "@/app/redux/store";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export function CartSide({ children }: { children: React.ReactNode }) {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cartItems, dispatch]);

  return (
    <div className="grid grid-cols-2 items-center justify-center">
      <Sheet>
        <SheetTrigger asChild>
          <button className="text-center text-gray-700 hover:text-primary transition relative">
            <div>
              <ShoppingCart size={30} strokeWidth={2} />
            </div>
            <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              {totalQuantity}
            </div>
          </button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-xl overflow-auto">
          {children}
        </SheetContent>
      </Sheet>
    </div>
  );
}
