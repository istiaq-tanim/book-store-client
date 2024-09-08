import { LucideIcon } from "lucide-react";
import { USER_ROLE } from "../constant/role";

export type UserRole = keyof typeof USER_ROLE

export type MenuItem = {
      icon: LucideIcon;
      label: string;
      href: string;
}