import { LucideIcon } from "lucide-react";
import { USER_ROLE } from "../constant/role";

export type UserRole = keyof typeof USER_ROLE

export type MenuItem = {
      icon: LucideIcon;
      label: string;
      href: string;
}

export type BookInputs = {
      title: string;
      author: string;
      originalPrice: number;
      rating: number;
      image: string;
      category: string;
      format: string;
      description: string;
      onSale: boolean;
      featured: boolean;
      price?: number
      saleNumber: number
}