"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

import { CartSide } from "@/app/(mainLayout)/_components/Cart/Cart";
import CartList from "@/app/(mainLayout)/_components/CartList/CartList";
import { Menu, X } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

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

      <nav className="flex items-center gap-4 sm:gap-1">
        <div className="items-center justify-center flex">
          <CartSide>
            <CartList></CartList>
          </CartSide>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="cursor-pointer">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 mt-4">
            <DropdownMenuItem className="cursor-pointer" asChild>
              <Link href="account/enrolled-courses">LogIn</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" asChild>
              <Link href="">Logout</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" asChild>
              <Link href="account">Register</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
