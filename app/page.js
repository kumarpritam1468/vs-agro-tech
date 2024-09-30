"use client"

import Image from "next/image";
import { topProducts } from "./data/data";
import { FaArrowRight } from "react-icons/fa6";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import Videos from "./components/Videos";

// import { motion } from "framer-motion";
// import { slideUp, slideLeft, slideRight } from "./framer-configs/framerConfigs";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg pt-[10svh] h-[100svh] max-md:px-6 max-md:pb-8 justify-center flex max-md:flex-col items-center gap-16 2xl:gap-40">
        <div className=" w-2/3 max-md:w-full flex flex-col justify-center items-center gap-5 text-white text-center">
          <h1
            className=" font-semibold text-center text-7xl max-xl:text-6xl tracking-[0.08em]"
          >
            VS AGROTECH
          </h1>
          <p
            className=" text-3xl max-xl:text-[1.3rem] text-center"
          >
            With a vision to provide healthy and good to the animals
          </p>

          <div className=" flex gap-8 max-md:gap-4 font-medium mt-4">
            {/* <a href="/products" className="btn max-md:scale-90">
              <FaArrowRight className="arr-2" />
              <span className="text">Discover</span>
              <span className="circle"></span>
              <FaArrowRight className="arr-1" />
            </a>

            <a href="/contact" className="btn max-md:scale-90">
              <FaArrowRight className="arr-2" />
              <span className="text">Contact Us</span>
              <span className="circle"></span>
              <FaArrowRight className="arr-1" />
            </a> */}

            <Link class="btn3" href="/products">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Discover All</span>
            </Link>
          </div>
        </div>

        {/* <div className=" w-1/2 max-md:w-full scale-110 2xl:scale-[1.4]">
          <img src="/animals.png" alt="Animals" />
        </div> */}

      </section>

      <section className="bg2 h-[100svh] flex max-md:flex-col justify-center items-center gap-20 px-12 max-md:px-6 max-md:py-16 border-b-2 border-b-gray-400">
        <div className="relative w-fit h-fit max-md:w-4/5">
          <div className=" w-full h-full bg-green-600 absolute top-4 left-4 z-20"></div>
          <div className=" w-full h-full bg-green-300 absolute top-8 left-8 z-10"></div>
          <Image src='/calf.jpg' alt="Calf" width={450} height={450} className=" relative z-30" />
        </div>

        <div className="w-1/2 max-md:w-4/5 flex flex-col gap-6 max-md:text-center max-md:items-center">
          <h1 className=" text-5xl font-medium">Cattle foods</h1>
          <p>Feed is one of the major requirement in a farm. A good feed can determine the growth and health of the animal. We are producing the complete range for better growth and proper health of Cattle. All of our products are specially designed by very experienced and technically well versed nutritionists. The product is made through steam technology to nurture proper nutritions from the ingredients.</p>
          <a href="/products/cattle" className="btn max-md:scale-90">
            <FaArrowRight className="arr-2" />
            <span className="text">Explore</span>
            <span className="circle"></span>
            <FaArrowRight className="arr-1" />
          </a>
        </div>
      </section>

      <section className="bg3 h-[100svh] flex flex-row-reverse max-md:flex-col justify-center items-center gap-20 px-12 max-md:px-6 max-md:py-16">
        <div className=" relative w-fit h-fit max-md:w-4/5">
          <div className=" w-full h-full bg-green-600 absolute top-4 left-4 z-20"></div>
          <div className=" w-full h-full bg-green-300 absolute top-8 left-8 z-10"></div>
          <Image src='/pigs.jpg' alt="Calf" width={450} height={450} className=" relative z-30" />
        </div>

        <div className=" w-1/2 max-md:w-4/5 flex flex-col gap-6 max-md:text-center max-md:items-center">
          <h1 className=" text-5xl font-medium">Swine foods</h1>
          <p>Feed is one of the major requirement in a farm. A good feed can determine the growth and health of the animal. We are producing the complete range for better growth and proper health of Swine. All of our products are specially designed by very experienced and technically well versed nutritionists. The product is made through steam technology to nurture proper nutritions from the ingredients.</p>
          <a href="/products/swine" className="btn max-md:scale-90">
            <FaArrowRight className="arr-2" />
            <span className="text">Explore</span>
            <span className="circle"></span>
            <FaArrowRight className="arr-1" />
          </a>
        </div>
      </section>

      <section className="bg4 flex flex-col justify-center gap-10 px-16 py-20">
        <h1 className=" text-5xl font-medium text-white underline underline-offset-8">Top Products</h1>

        <div className=" w-full flex max-md:flex-col justify-between gap-12 flex-wrap">
          {topProducts.map((item, index) => (
            <ProductCard key={index} index={item.id} type={item.type} name={item.name} imgUrl={item.imgUrl} desc={item.desc} />
          ))}
        </div>
      </section>

      <Videos />

      <Footer />
    </main>
  );
}
