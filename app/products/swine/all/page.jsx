"use client"

import ProductCard from '@/app/components/ProductCard'
import { cattleFoods, dosesTable, nutrientsTable, swineFoods } from '@/app/data/data'

import { motion } from "framer-motion";
import { slideRight, slideUp } from "@/app/framer-configs/framerConfigs"
import Image from 'next/image';

const page = () => {
    return (
        <section className='bg3-dark h-[100svh] pt-[10svh] px-6'>
            <div className=" h-full w-full overflow-auto">

                <motion.div
                    className=' flex flex-col gap-2 mt-6 text-white text-center'
                    variants={slideRight(0)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    <h2 className=' text-3xl font-semibold underline text-center'>Swine Feed</h2>
                </motion.div>
                <motion.p
                    variants={slideRight(0.2)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                    className=' text-2xl mt-6 text-white px-36 max-md:px-6 max-lg:px-12'
                >
                    <span className=' font-medium underline pr-1'>Ingredients:</span> Maize, Soya, Broken rice, Oil cakes, Salt, Mineral mixture, Multi-vitamins and Essential Amino Acids and Anti-Biotics.
                </motion.p>

                <motion.div className=' flex max-md:flex-col justify-center items-center flex-wrap gap-10 py-10'
                    variants={slideRight(0.4)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    {swineFoods.map((product, index) => (
                        <div className=' flex max-md:flex-col gap-24 max-md:gap-6 px-20 max-lg:px-8 max-md:px-4 items-center justify-center text-white' key={index}>
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

                            <div className="w-full py-12 max-md:py-6 max-md:px-6 h-full flex flex-col gap-6 max-md:text-center max-md:items-center">
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
                                    <p className=' max-md:text-xl'>{product.details}</p>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </motion.div>



            </div>
        </section >
    )
}

export default page