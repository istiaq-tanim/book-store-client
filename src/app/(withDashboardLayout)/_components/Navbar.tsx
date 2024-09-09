"use client";

import { logOut } from "@/app/(withoutMainLayout)/action/authAction";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/lib/AuthProvider";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MobileSidebar } from "./MobileSidebar";

export const Navbar = () => {
  const router = useRouter();
  const { user } = useAuth();
  const handleLogout = async () => {
    await logOut();
    router.push("/");
  };
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <Link href="/" className="text-2xl pl-5">
        Book<span className="text-red-400">Store</span>
      </Link>
      <div className="flex items-center justify-end  w-full">
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
            <DropdownMenuItem className="cursor-pointer">
              <span>{user?.email}</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <button
                className="flex gap-2 jutify-center items-center"
                onClick={handleLogout}
              >
                <LogOut width={16} />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
