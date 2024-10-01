"use client"

import ProductCard from '@/app/components/ProductCard'
import { swineFoods } from '@/app/data/data'

import { motion } from "framer-motion";
import { slideRight } from "../../framer-configs/framerConfigs"

const page = () => {
    return (
        <section className='bg3-dark h-[100svh] pt-[10svh] px-6'>
            <div className=' h-full w-full overflow-auto'>
                <motion.h1
                    className=' font-semibold underline underline-offset-4 text-4xl mt-6 text-center text-white'
                    variants={slideRight(0)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    Swine Foods
                </motion.h1>

                <motion.div
                    className=' flex max-md:flex-col justify-center items-center flex-wrap gap-10 py-10'
                    variants={slideRight(0.2)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    {swineFoods.map((item, index) => (
                        <ProductCard key={index} index={index} type="swine" name={item.name} imgUrl={item.imgUrl} desc="" />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default page