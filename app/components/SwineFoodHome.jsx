"use client"

import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

import { motion } from "framer-motion";
import { slideLeft, slideRight, slideUp } from "../framer-configs/framerConfigs"

const SwineFoodHome = () => {
  return (
    <section className="bg3 h-[100svh] flex flex-row-reverse max-md:flex-col justify-center items-center gap-20 px-12 max-md:px-6 max-md:py-16">
      <motion.div
        className=" relative w-fit h-fit max-md:w-4/5"
        variants={slideLeft(0)}
        initial={"initial"}
        whileInView={'animate'}
        viewport={{ once: true }}
      >
        <div className=" w-full h-full bg-green-600 absolute top-4 left-4 z-20"></div>
        <div className=" w-full h-full bg-green-300 absolute top-8 left-8 z-10"></div>
        <Image src='/pigs.jpg' alt="Calf" width={450} height={450} className=" relative z-30" />
      </motion.div>

      <div className=" w-1/2 max-md:w-4/5 flex flex-col gap-6 max-md:text-center max-md:items-center">
        <motion.h1
          className=" text-5xl font-medium"
          variants={slideUp(0)}
          initial={"initial"}
          whileInView={'animate'}
          viewport={{ once: true }}
        >
          Swine foods

        </motion.h1>
        <motion.p
          variants={slideUp(0.2)}
          initial={"initial"}
          whileInView={'animate'}
          viewport={{ once: true }}
        >
          Feed is one of the major requirement in a farm. A good feed can determine the growth and health of the animal. We are producing the complete range for better growth and proper health of Swine. All of our products are specially designed by very experienced and technically well versed nutritionists. The product is made through steam technology to nurture proper nutritions from the ingredients.
        </motion.p>
        <Link href="/products/swine">
          <motion.div
            className="btn max-md:scale-90"
            variants={slideRight(0.2)}
            initial={"initial"}
            whileInView={'animate'}
            viewport={{ once: true }}
          >
            <FaArrowRight className="arr-2" />
            <span className="text">Explore</span>
            <span className="circle"></span>
            <FaArrowRight className="arr-1" />
          </motion.div>
        </Link>
      </div>
    </section>
  )
}

export default SwineFoodHome