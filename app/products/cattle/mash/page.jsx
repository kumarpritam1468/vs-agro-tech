"use client"

import ProductCard from '@/app/components/ProductCard'
import { cattleFoods } from '@/app/data/data'

import { motion } from "framer-motion";
import { slideRight } from "@/app/framer-configs/framerConfigs"

const page = () => {
    return (
        <section className='bg2-dark h-[100svh] pt-[10svh] px-6'>
            <div className=" h-full w-full overflow-auto">

                <motion.div
                    className=' flex flex-col gap-2 mt-6 text-white ml-6'
                    variants={slideRight(0)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    <h2 className=' text-3xl font-semibold underline text-center'>Mash Feed</h2>
                </motion.div>

                <motion.div className=' flex max-md:flex-col justify-center items-center flex-wrap gap-10 py-10'
                    variants={slideRight(0.2)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    {cattleFoods.slice(5, 7).map((item, index) => (
                        <ProductCard key={index} index={index+5} type={"cattle"} name={item.name} imgUrl={item.imgUrl} desc={item.desc} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default page