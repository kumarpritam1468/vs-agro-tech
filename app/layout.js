import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VS Agro Tech",
  description: "With a vision to provide healthy and good to the animals,  Go seva learnt from the teaching of lord Krishna,urea and chemical based feed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
