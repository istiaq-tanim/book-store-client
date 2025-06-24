import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";
import StoreProvider from "./redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book store",
  description: "Book Store is Online Book Selling Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5J0J4TSZKH"
        ></Script>
        <Script id="goggle-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5J0J4TSZKH');`}
        </Script>
      </head>
      <body className={inter.className}>
        <Toaster />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
