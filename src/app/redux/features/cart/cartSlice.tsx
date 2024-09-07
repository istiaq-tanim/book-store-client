import { ReviewItem } from "@/app/(mainLayout)/_components/BookCardList/BookCardList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

export interface ICartItem {
  _id: string;
  image: string;
  title: string;
  author: string;
  price: string;
  originalPrice?: string;
  ratings: number;
  format: string[];
  description: string;
  reviews: ReviewItem[];
  category: string;
  onSale: boolean;
  saleNumber: number;
  featured: boolean;
  quantity?: number;
}

export interface IProduct {
  items: ICartItem[];
  totalAmount: number;
  totalQuantity: 0;
}

const initialState: IProduct = {
  items: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") as string)
    : [],
  totalAmount: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      const findItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (findItem) {
        findItem.quantity = (findItem.quantity || 1) + 1;
        toast.success("Product added to the Cart");
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        toast.success("Product added to the Cart");
        state.items.push(newProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
