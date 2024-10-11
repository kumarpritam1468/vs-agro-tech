"use client"

import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

import { motion } from "framer-motion";
import { slideLeft, slideRight, slideUp } from "../framer-configs/framerConfigs"

const CattleFoodHome = () => {
    return (
        <section className="bg2 h-[100svh] flex max-md:flex-col justify-center items-center gap-20 px-12 max-md:px-6 max-md:py-16 border-b-2 border-b-gray-400">
            <motion.div
                className="relative w-fit h-fit max-md:w-4/5"
                variants={slideRight(0)}
                initial={"initial"}
                whileInView={'animate'}
                viewport={{ once: true }}
            >
                <div className=" w-full h-full bg-green-600 absolute top-4 left-4 z-20"></div>
                <div className=" w-full h-full bg-green-300 absolute top-8 left-8 z-10"></div>
                <Image src='/calf.jpg' alt="Calf" width={450} height={450} className=" relative z-30" />
            </motion.div>

            <div className="w-1/2 max-md:w-4/5 flex flex-col gap-6 text-center items-center">
                <motion.h1
                    className=" text-5xl font-medium"
                    variants={slideUp(0)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    Cattle
                </motion.h1>
                <motion.p
                className=' max-md:text-xl'
                    variants={slideUp(0.2)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    Cow can never be separated from our society. Referred as “MAA” or “MATA”
                    cow is loved just like mother is said to have all Gods in her body. Closely
                    associated since more than 12000 years is integrate part of our daily life. Lord
                    Krishna having cannot be imagined without cow. Cow give us Milk, dung, urine
                    etc.

                </motion.p>
                <Link href="/products/cattle">
                    <motion.div
                        className="btn max-md:scale-90"
                        variants={slideLeft(0.2)}
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

export default CattleFoodHome