"use client"

import { swineFoods } from '@/app/data/data';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import { motion } from "framer-motion";
import { slideRight, slideUp } from "../../../framer-configs/framerConfigs"

const page = () => {
    const { index } = useParams();

    const product = swineFoods[index];
    return (
        <section className='bg3 h-[100svh] pt-[10svh] flex max-md:flex-col justify-center items-center gap-20 max-md:gap-8 pl-12 max-md:px-6'>
            <motion.div
                className="relative w-fit h-fit max-md:w-3/5 mt-4"
                variants={slideRight(0)}
                initial={"initial"}
                whileInView={'animate'}
                viewport={{ once: true }}
            >
                <div className=" w-full h-full bg-green-600 absolute top-4 left-4 z-20"></div>
                <div className=" w-full h-full bg-green-300 absolute top-8 left-8 z-10"></div>
                <Image src={product.imgUrl} alt="Swine Food" width={250} height={450} className=" relative z-30" />
            </motion.div>

            <div className="w-1/2 max-md:w-full pr-12 max-md:pr-6 h-full flex justify-center flex-col gap-6 max-md:text-center max-md:items-center">
                <motion.h1
                    className=" text-5xl font-medium"
                    variants={slideUp(0.1)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    {product.name}
                </motion.h1>

                <motion.p
                    className=' text-2xl max-md:text-xl'
                    variants={slideUp(0.3)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    {product.details}
                </motion.p>
            </div>
        </section>
    )
}

export default page