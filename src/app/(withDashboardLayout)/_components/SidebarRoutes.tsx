"use client";

import { UserRole } from "@/app/types/common";
import { sideBarMenu } from "@/app/utils/generateSidebarMenu";
import { SidebarItem } from "./SidebarItem";

export const SidebarRoutes = ({ user }: { user: string }) => {
  return (
    <div className="flex flex-col w-full">
      {sideBarMenu(user.toLowerCase() as UserRole).map((route) => (
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
