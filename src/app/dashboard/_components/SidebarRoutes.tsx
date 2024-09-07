"use client";

import { BarChart, BookPlus } from "lucide-react";

import { BookOpen } from "lucide-react";
import { SidebarItem } from "./SidebarItem";

const routes = [
  {
    icon: BarChart,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: BookOpen,
    label: "Books",
    href: "/dashboard/books",
  },
  {
    icon: BookPlus,
    label: "Add Books",
    href: "/dashboard/addBooks",
  },
];

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
