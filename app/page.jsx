import Footer from "./components/Footer";
// import Videos from "./components/Videos";
import Hero from "./components/Hero";
import CattleFoodHome from "./components/CattleFoodHome";
import SwineFoodHome from "./components/SwineFoodHome";
import TopProducts from "./components/TopProducts";

// import { motion } from "framer-motion";
// import { slideUp, slideLeft, slideRight } from "./framer-configs/framerConfigs";

export default function Home() {
  return (
    <main>
      <Hero />
      <CattleFoodHome />
      <SwineFoodHome />
      <TopProducts />
      {/* <Videos /> */}
      <Footer />
    </main>
  );
}
