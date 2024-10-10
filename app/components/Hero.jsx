"use client"

import Link from 'next/link'
import { motion } from "framer-motion";
import { slideRight } from "../framer-configs/framerConfigs"

const Hero = () => {
    return (
        <section className="bg pt-[10svh] h-[100svh] max-md:px-6 max-md:pb-8 justify-center flex max-md:flex-col items-center gap-16 2xl:gap-40">
            <div className=" w-2/3 max-md:w-full flex flex-col justify-center items-center gap-5 text-white text-center">
                <motion.h1
                    className=" font-semibold text-center text-7xl max-xl:text-6xl tracking-wide"
                    variants={slideRight(0)}
                    initial={"initial"}
                    animate={"animate"}
                >
                    VS AGROTECH
                </motion.h1>
                <motion.p
                    className=" text-3xl max-xl:text-[1.3rem] text-center"
                    variants={slideRight(0.2)}
                    initial={"initial"}
                    animate={"animate"}
                >
                    A vision to provide healthy and good to the animals
                </motion.p>

                <motion.div
                    className="font-medium mt-4"
                    variants={slideRight(0.4)}
                    initial={"initial"}
                    animate={"animate"}
                >
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
                </motion.div>
            </div>

            {/* <div className=" w-1/2 max-md:w-full scale-110 2xl:scale-[1.4]">
          <img src="/animals.png" alt="Animals" />
        </div> */}

        </section>
    )
}

export default Hero