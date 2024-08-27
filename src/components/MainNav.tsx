"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

import { Menu, X } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { buttonVariants } from "./ui/button";

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
        <div className="items-center gap-3 hidden lg:flex">
          <Link
            href="/login"
            className={cn(buttonVariants({ size: "sm" }), "px-4")}
          >
            Login
          </Link>
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
