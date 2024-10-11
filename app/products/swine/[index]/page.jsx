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

            <div className="w-full pr-12 py-12 max-md:py-6 max-md:px-6 h-full overflow-y-auto flex flex-col gap-6 max-md:text-center max-md:items-center">
                <motion.h1
                    className=" text-5xl font-medium"
                    variants={slideUp(0.2)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    {product.name}
                </motion.h1>

                <motion.div
                    className=' flex gap-3 flex-col text-xl max-md:text-lg'
                    variants={slideUp(0.4)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    <h2 className=' text-2xl font-semibold max-md:text-xl mt-4'>Details:</h2>
                    <p>{product.details}</p>

                    <h2 className=' text-2xl font-semibold max-md:text-xl mt-4'>Feeding Process:</h2>
                    <p>{product.feeding}</p>
                </motion.div>
            </div>
        </section>
    )
}

export default page