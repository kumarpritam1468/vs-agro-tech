import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <section className="bg pt-[10svh] h-[100svh] max-md:px-6 max-md:pb-8 justify-center flex max-md:flex-col items-center gap-16 2xl:gap-40">

        <div className=" w-2/3 max-md:w-full flex flex-col justify-center items-center gap-5 text-white text-center">
          <h1 className=" font-semibold text-5xl">V S Agrotech</h1>
          <h2 className=" font-bold text-4xl">With a vision to provide healthy and good to the animals</h2>
          <p className=" font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque officiis voluptate non quia consequatur illum a expedita sunt voluptatum aliquam!</p>

          <div className=" flex gap-8 max-md:gap-4 font-medium mt-4">
            <button className="btn max-md:scale-90">
              <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
              <span class="text">Products</span>
              <span class="circle"></span>
              <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
            </button>

            <button className="btn max-md:scale-90">
              <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
              <span class="text">Contact Us</span>
              <span class="circle"></span>
              <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* <div className=" w-1/2 max-md:w-full scale-110 2xl:scale-[1.4]">
          <img src="/animals.png" alt="Animals" />
        </div> */}

      </section>
    </main>
  );
}
