import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "欢迎来到陈工的世界",
  description: "welcome to Chen's world",
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
