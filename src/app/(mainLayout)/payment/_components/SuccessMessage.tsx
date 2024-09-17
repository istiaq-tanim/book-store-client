"use client";
import { Button } from "@/components/ui/button";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";

import { removeFullItem } from "@/app/redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const SuccessMessage = ({ tranId }: { tranId: string }) => {
  const dispatch = useDispatch();
  if (tranId) {
    dispatch(removeFullItem());
  }
  return (
    <div>
      <div>
        <div className="h-full w-full flex-1 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-6 max-w-[600px] text-center">
            <CircleCheckBig className="w-32 h-32 bg-success rounded-full p-0 text-black" />
            <h1 className="text-xl md:text-2xl lg:text-3xl">
              Congratulations! Your Payment was Successful with Transaction id{" "}
              {tranId}
            </h1>
            <div className="flex items-center gap-3">
              <Button asChild size="sm">
                <Link href="/shop">Browse Books</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
