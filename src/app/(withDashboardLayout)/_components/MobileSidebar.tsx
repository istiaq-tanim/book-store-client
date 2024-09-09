"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/lib/AuthProvider";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

export const MobileSidebar = () => {
  const { user } = useAuth();
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white">
        <Sidebar user={user?.role} />
      </SheetContent>
    </Sheet>
  );
};
