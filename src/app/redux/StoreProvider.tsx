"use client";
import { Provider } from "react-redux";

import { AuthProvider } from "@/lib/AuthProvider";
import { store } from "./store";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
};

export default StoreProvider;
