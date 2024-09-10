import { ReviewItem } from "@/app/(mainLayout)/_components/BookCardList/BookCardList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "sonner";

export interface ICartItem {
  _id: string;
  image: string;
  title: string;
  author: string;
  price?: number;
  originalPrice: number;
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
  totalQuantity: number;
}

const initialState: IProduct = {
  items: Cookies.get("carts") ? JSON.parse(Cookies.get("carts") as string) : [],
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
        toast.success("Product increased in the cart");
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        toast.success("Product added to the cart");
        state.items.push(newProduct);
      }
      state.totalAmount = 0;
      state.totalQuantity = 0;
      Cookies.set("carts", JSON.stringify(state.items));
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const filteredItem = state.items.filter(
        (item) => item._id !== action.payload
      );
      state.items = filteredItem;
      state.totalAmount = 0;
      state.totalQuantity = 0;
      toast.error("Product removed from the cart");
      Cookies.set("carts", JSON.stringify(state.items));
    },
    decrement: (state, action: PayloadAction<string>) => {
      const findItemIndex = state.items.findIndex(
        (item) => item._id === action.payload
      );
      if ((state.items[findItemIndex]?.quantity || 0) > 1) {
        state.items[findItemIndex].quantity =
          (state.items[findItemIndex]?.quantity || 0) - 1;
        toast.success("Product quantity decreased");
      } else if (state.items[findItemIndex]?.quantity === 1) {
        const filteredItem = state.items.filter(
          (item) => item._id !== action.payload
        );
        state.items = filteredItem;
        toast.error("Product removed from the cart");
      }
      state.totalAmount = 0;
      state.totalQuantity = 0;
      Cookies.set("carts", JSON.stringify(state.items));
    },
    getTotal: (state) => {
      const { total, quantity } = state.items.reduce(
        (cartTotal: { total: number; quantity: number }, cartItem) => {
          const { price, originalPrice, quantity = 0 } = cartItem;
          const totalPrice = (price ?? originalPrice) * quantity;
          cartTotal.total += totalPrice;
          cartTotal.quantity += quantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.totalAmount = total;
      state.totalQuantity = quantity;
    },
  },
});

export const { addItem, removeItem, decrement, getTotal } = cartSlice.actions;
export default cartSlice.reducer;
