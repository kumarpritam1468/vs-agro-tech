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

      <div className=" w-1/2 max-md:w-4/5 flex flex-col gap-6 text-center items-center">
        <motion.h1
          className=" text-5xl font-medium"
          variants={slideUp(0)}
          initial={"initial"}
          whileInView={'animate'}
          viewport={{ once: true }}
        >
          Swine

        </motion.h1>
        <motion.p
        className=' text-center max-md:text-xl'
          variants={slideUp(0.2)}
          initial={"initial"}
          whileInView={'animate'}
          viewport={{ once: true }}
        >
          Swine are friend to us since 7000 B.C. Pigs were domesticated almost 10000
          years back and are part of civilization since then. We can see various examples
          in different mythologies too. The skin of Pig is so similar that it can be used for
          skin replacement of human. Pigs are farmed not only for their meat but have a
          number of other uses like in medicines, paint brushes, grease, paints, etc
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