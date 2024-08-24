import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: "VS Agro Tech",
  description: "With a vision to provide healthy and good to the animals,  Go seva learnt from the teaching of lord Krishna,urea and chemical based feed",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
