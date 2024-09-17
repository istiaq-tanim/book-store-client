import {
  BarChart,
  BookOpen,
  BookPlus,
  ClipboardList,
  ShoppingBag,
} from "lucide-react";
import { USER_ROLE } from "../constant/role";
import { MenuItem, UserRole } from "../types/common";

export const sideBarMenu = (role: UserRole): MenuItem[] => {
  const roleMenus: MenuItem[] = [];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          icon: BarChart,
          label: "Dashboard",
          href: `${role}`,
        },
        {
          icon: BookOpen,
          label: "Books",
          href: `${role}/books`,
        },
        {
          icon: BookPlus,
          label: "Add Books",
          href: `${role}/addBooks`,
        },
        {
          icon: ClipboardList,
          label: "Manage Order",
          href: `${role}/manageOrder`,
        }
      );
      break;
    case USER_ROLE.USER:
      roleMenus.push(
        {
          icon: BarChart,
          label: "Dashboard",
          href: `${role}`,
        },
        {
          icon: ShoppingBag,
          label: "Order",
          href: `${role}/my-orders`,
        }
      );
      break;

    default:
      break;
  }
  return [...roleMenus];
};
