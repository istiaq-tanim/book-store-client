"use client";

import { editOrder } from "@/app/services/actions/productAction";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function OrderAction({
  orderId,
  initialStatus,
}: {
  orderId: string;
  initialStatus: boolean;
}) {
  const [status, setStatus] = useState<Checked>(initialStatus);

  const toggleStatus = async () => {
    try {
      const response = await editOrder(orderId);

      if (response.ok) {
        const updatedOrder = await response.json();
        setStatus(updatedOrder.status);
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-black flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="stroke-black group-hover:stroke-white"
              d="M10.0161 14.9897V15.0397M10.0161 9.97598V10.026M10.0161 4.96231V5.01231"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={!status}
          onCheckedChange={() => {
            setStatus(false);
            toggleStatus();
          }}
        >
          Pending
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={status}
          onCheckedChange={() => {
            setStatus(true);
            toggleStatus();
          }}
        >
          Delivered
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
