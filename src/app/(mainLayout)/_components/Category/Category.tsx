import {
  ChevronRight,
  ClipboardPen,
  CookingPot,
  Heart,
  Stethoscope,
  Wallet,
} from "lucide-react";
import Link from "next/link";
const Category = () => {
  return (
    <div className="container mt-20">
      <div className="flex justify-between">
        <p className="text-3xl">Featured Categories</p>
        <div className="flex flex-row">
          <p className="hover:text-[#f75454]">All Categories</p>
          <ChevronRight strokeWidth={1} />
        </div>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row gap-5 mt-10 justify-center items-center">
          <div className="bg-[#faf1ff] flex flex-col p-10 space-y-2 w-96">
            <Wallet
              size={48}
              strokeWidth={1}
              className="text-[#a200fc]"
            ></Wallet>
            <p className="font-semibold text-lg">Arts & Photography</p>
            <p>
              <Link href="/shop">Shop Now</Link>
            </p>
          </div>
          <div className="bg-[#fbf6ee] flex flex-col p-10 space-y-1 w-96">
            <CookingPot
              className="text-[#f79400]"
              size={48}
              strokeWidth={1.5}
            />
            <p className="font-semibold text-lg">Food & Drink</p>
            <p>
              <Link href="/shop">Shop Now</Link>
            </p>
          </div>

          <div className="bg-[#fff1f0] flex flex-col p-10 space-y-1 w-96">
            <Heart size={48} strokeWidth={1.5} className="text-[#f01000]" />
            <p className="font-semibold text-lg">Romance</p>
            <p>
              <Link href="/shop">Shop Now</Link>
            </p>
          </div>
          <div className="bg-[#f1fdff] flex flex-col p-10 space-y-1 w-96">
            <Stethoscope
              size={48}
              strokeWidth={1.5}
              className="text-[#00cdef]"
            />
            <p className="font-semibold text-lg">Health</p>
            <p>
              <Link href="/shop">Shop Now</Link>
            </p>
          </div>
          <div className="bg-[#fff4f4] flex flex-col p-10 space-y-1 w-96">
            <ClipboardPen
              size={48}
              strokeWidth={1.5}
              className="text-[#ff8e8e]"
            />
            <p className="font-semibold text-lg">Biography</p>
            <p>
              <Link href="/shop">Shop Now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
