"use client"

import ProductCard from '@/app/components/ProductCard'
import { cattleFoods, dosesTable, nutrientsTable } from '@/app/data/data'

import { motion } from "framer-motion";
import { slideRight } from "@/app/framer-configs/framerConfigs"

const page = () => {
    return (
        <section className='bg2-dark h-[100svh] pt-[10svh] px-6'>
            <div className=" h-full w-full overflow-auto">

                <motion.div
                    className=' flex flex-col gap-2 mt-6 text-white text-center'
                    variants={slideRight(0)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    <h2 className=' text-3xl font-semibold underline text-center'>Pellet Feed</h2>
                </motion.div>
                <motion.p
                    variants={slideRight(0.2)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                    className=' text-2xl mt-6 text-white px-36 max-md:px-6 max-lg:px-12'
                >
                    <span className=' font-medium underline pr-1'>Ingredients:</span> Maize, Oil cakes, Chokad, Chunni, DORB, Bran, Calcium, Salt, Mineral mixture, Multi-vitamins, Calcium, Phosphorus, etc.
                </motion.p>

                <motion.div className=' flex max-md:flex-col justify-center items-center flex-wrap gap-10 py-10'
                    variants={slideRight(0.4)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    {cattleFoods.slice(0, 5).map((item, index) => (
                        <ProductCard key={index} index={index} type={"cattle/pellet"} name={item.name} imgUrl={item.imgUrl} desc={item.desc} />
                    ))}
                </motion.div>



            </div>
        </section >
    )
}

export default page