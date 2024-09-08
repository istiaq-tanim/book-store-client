"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

import { CartSide } from "@/app/(mainLayout)/_components/Cart/Cart";
import CartList from "@/app/(mainLayout)/_components/CartList/CartList";
import { logOut } from "@/app/(withoutMainLayout)/action/authAction";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { MobileNav } from "./MobileNav";
import { Button, buttonVariants } from "./ui/button";

export type TNavLink = {
  title: string;
  href: string;
};

export function MainNav({
  items,
  user,
  children,
}: {
  items: TNavLink[];
  user: string;
  children?: React.ReactNode;
}) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    await logOut();
    router.refresh();
  };

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
        {user ? (
          <Button
            onClick={handleLogout}
            className={cn(buttonVariants({ size: "sm" }), "px-4")}
          >
            Logout
          </Button>
        ) : (
          <Link
            href="/login"
            className={cn(buttonVariants({ size: "sm" }), "px-4")}
          >
            Login
          </Link>
        )}

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
