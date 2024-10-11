import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: "VS Agro Tech",
  description: "Best Cattle Feed, Best Swine Feed, pellet feed, mash feed, A vision to provide healthy and good to the animals, Cuttack, Odisha, India",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
