"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

import { Menu, X } from "lucide-react";
import { MobileNav } from "./MobileNav";

export type TNavLink = {
  title: string;
  href: string;
};

export function MainNav({
  items,
  children,
}: {
  items: TNavLink[];
  children?: React.ReactNode;
}) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <div className="flex gap-6 lg:gap-16 mx-10">
        <Link href="/" className="text-2xl">
          Book<span className="text-red-400">Store</span>
        </Link>
        {items?.length ? (
          <nav className="hidden gap-10 lg:flex">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-lg"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}

        {showMobileMenu && items && (
          <MobileNav items={items}>{children}</MobileNav>
        )}
      </div>
      <nav className="flex items-center gap-3">
        <div className="flex px-10 py-3 rounded-md bg-[#f6f5f3] overflow-hidden max-w-md mx-auto font-[sans-serif]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="16px"
            className="fill-gray-600 mr-3 rotate-90"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
          <input
            type="email"
            placeholder="Search Something..."
            className="w-full outline-none bg-transparent text-gray-600 text-sm"
          />
        </div>

        <button
          className="flex items-center space-x-2 lg:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <X /> : <Menu />}
        </button>
      </nav>
    </>
  );
}
