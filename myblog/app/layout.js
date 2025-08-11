/*
 * @Author: Chen_陈工
 * @Date: 2025-08-11 22:50:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-08-11 23:36:32
 * @FilePath: \My_blog_next.js\myblog\app\layout.js
 */
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],weight:["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"],weight:["400"]
});

export const metadata = {
  title: "欢迎光临陈工的世界",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
