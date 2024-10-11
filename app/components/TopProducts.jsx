"use client"

import { topProducts } from '../data/data'
import ProductCard from './ProductCard'

import { motion } from "framer-motion";
import { slideRight, slideUp } from "../framer-configs/framerConfigs"

const TopProducts = () => {
    return (
        <section className="bg4 flex flex-col justify-center items-center gap-10 px-8 py-20">
            <motion.h1
                className=" text-5xl font-medium text-white underline underline-offset-8"
                variants={slideRight(0)}
                initial={"initial"}
                whileInView={'animate'}
                viewport={{ once: true }}
            >
                Top Products
            </motion.h1>

            <motion.div
                className=" w-full flex max-md:flex-col items-center justify-between gap-12 flex-wrap"
                variants={slideUp(0)}
                initial={"initial"}
                whileInView={'animate'}
                viewport={{ once: true }}
            >
                {topProducts?.map((item, index) => (
                    <ProductCard key={index} type={item.type} name={item.name} imgUrl={item.imgUrl} desc={item.desc} />
                ))}
            </motion.div>
        </section>
    )
}

export default TopProducts