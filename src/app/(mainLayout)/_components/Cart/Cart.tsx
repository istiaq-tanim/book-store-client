"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
export function CartSide({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 items-center justify-center">
      <Sheet>
        <SheetTrigger asChild>
          <button className="text-center text-gray-700 hover:text-primary transition relative">
            <div>
              <ShoppingCart size={30} strokeWidth={2} />
            </div>
            <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              2
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
