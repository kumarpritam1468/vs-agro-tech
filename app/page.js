import Image from "next/image";
import { topProducts } from "./data/data";
import { FaArrowRight } from "react-icons/fa6";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <section className="bg pt-[10svh] h-[100svh] max-md:px-6 max-md:pb-8 justify-center flex max-md:flex-col items-center gap-16 2xl:gap-40">

        <div className=" w-2/3 max-md:w-full flex flex-col justify-center items-center gap-5 text-white text-center">
          <h1 className=" font-semibold text-5xl">V S Agrotech</h1>
          <h2 className=" font-medium text-4xl">With a vision to provide healthy and good to the animals</h2>
          <p className=" font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque officiis voluptate non quia consequatur illum a expedita sunt voluptatum aliquam!</p>

          <div className=" flex gap-8 max-md:gap-4 font-medium mt-4">
            <button className="btn max-md:scale-90">
              <FaArrowRight className="arr-2" />
              <span className="text">Products</span>
              <span className="circle"></span>
              <FaArrowRight className="arr-1" />
            </button>

            <button className="btn max-md:scale-90">
              <FaArrowRight className="arr-2" />
              <span className="text">Contact Us</span>
              <span className="circle"></span>
              <FaArrowRight className="arr-1" />
            </button>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugit, sequi minus perspiciatis culpa consequatur voluptatibus aliquid fugiat molestias sunt quibusdam repellat nesciunt, distinctio error ex doloribus tempora, labore ad suscipit praesentium voluptas repudiandae! Expedita possimus saepe, facilis eos omnis iusto? Voluptate quam libero distinctio odit dicta dolor eaque ad.</p>
          <button className="btn max-md:scale-90">
            <FaArrowRight className="arr-2" />
            <span className="text">Explore</span>
            <span className="circle"></span>
            <FaArrowRight className="arr-1" />
          </button>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugit, sequi minus perspiciatis culpa consequatur voluptatibus aliquid fugiat molestias sunt quibusdam repellat nesciunt, distinctio error ex doloribus tempora, labore ad suscipit praesentium voluptas repudiandae! Expedita possimus saepe, facilis eos omnis iusto? Voluptate quam libero distinctio odit dicta dolor eaque ad.</p>
          <button className="btn max-md:scale-90">
            <FaArrowRight className="arr-2" />
            <span className="text">Explore</span>
            <span className="circle"></span>
            <FaArrowRight className="arr-1" />
          </button>
        </div>
      </section>

      <section className="bg4 flex flex-col justify-center gap-10 px-16 py-20">
        <h1 className=" text-5xl font-medium text-white underline underline-offset-8">Top Products</h1>

        <div className=" w-full flex max-md:flex-col justify-between gap-16 flex-wrap">
          {topProducts.map((item, index) => (
            <ProductCard key={index} name={item.name} />
          ))}
        </div>
      </section>
    </main>
  );
}
