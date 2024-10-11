"use client"

import ProductCard from '@/app/components/ProductCard'
import { swineDoses, swineFoods, swineNutrients } from '@/app/data/data'

import { motion } from "framer-motion";
import { slideRight } from "../../framer-configs/framerConfigs"
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';

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
                    Swine Feed
                </motion.h1>

                <motion.div
                    className="flex flex-col gap-4 py-3 text-white px-20 max-md:px-6 max-lg:px-12 text-left"
                    variants={slideRight(0.2)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    <p className=' text-2xl mt-6 text-white'>
                        <span className=' font-medium underline pr-1'>Feeding Procedure:</span>The feed should be given at the rate of 15-20 grams per K.G. of body weight. The feeding quantity should be adjusted on the weekly basis as per the body weight. The total feed shall be divided in 3-4 equal batches and given to pigs after frequent intervals. The average FCR from Starter to Finisher feed is from 1.75 – 2 kg of feed per kg of gain in body weight. <br /> <br />
                        Sufficient clean and fresh water shall be provided for good body maintenance. The TDS of the water shall be checked regularly.

                    </p>
                </motion.div>

                {/* <motion.div
                    className=' flex max-md:flex-col justify-center items-center flex-wrap gap-10 py-10'
                    variants={slideRight(0.4)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    {swineFoods.map((item, index) => (
                        <ProductCard key={index} index={index} type="swine" name={item.name} imgUrl={item.imgUrl} desc="" />
                    ))}
                </motion.div> */}
                <motion.h1
                    variants={slideRight(0.2)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                    className=' font-semibold underline underline-offset-4 text-4xl mt-6 text-center text-white'>Standard Feed Quantity (as per body weight)</motion.h1>

                <motion.div
                    variants={slideRight(0.2)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                    className="overflow-x-auto py-12">
                    <table className="table bg-white table-zebra rounded-none table-lg max-md:table-sm w-11/12 max-md:w-full mx-auto">
                        {/* head */}
                        <thead>
                            <tr className=' text-lg max-md:text-base text-green-800 text-center'>
                                <th>Product</th>
                                <th>Lactation</th>
                                <th>Starter</th>
                                <th>Grower</th>
                                <th>Finisher</th>
                                <th>Gestation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {swineDoses.map((data, index) => (
                                <tr key={index} className=' text-center'>
                                    <th> {data.Details} </th>
                                    <td> {data.Lactation} </td>
                                    <td> {data.Starter} </td>
                                    <td> {data.Grower} </td>
                                    <td> {data.Finisher} </td>
                                    <td> {data.Gestation} </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                <h1 className=' font-semibold underline underline-offset-4 text-4xl mt-6 text-center text-white'>Nutrients Table</h1>

                <div className="overflow-x-auto py-12">
                    <table className="table bg-white table-zebra rounded-none table-lg max-md:table-sm w-9/12 max-md:w-full mx-auto">
                        {/* head */}
                        <thead>
                            <tr className=' text-lg max-md:text-base text-green-800'>
                                <th>Nutrients</th>
                                <th>Lactation</th>
                                <th>Starter</th>
                                <th>Grower</th>
                                <th>Finisher</th>
                                <th>Gestation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {swineNutrients.map((data, index) => (
                                <tr key={index} className=' text-center'>
                                    <th> {data.Details} </th>
                                    <td> {data.Lactation} </td>
                                    <td> {data.Starter} </td>
                                    <td> {data.Grower} </td>
                                    <td> {data.Finisher} </td>
                                    <td> {data.Gestation} </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <a href='/products/swine/all' className=' p-2 mx-auto rounded-2xl bg-green-100/80 hover:scale-[1.02] transition-all duration-500 ease-in-out flex flex-col items-center text-justify gap-4 cursor-pointer w-fit border-2 border-green-500 mb-4'>
                    <Image src="/pigs.jpg" alt="Calf" width={200} height={200} className=' w-80 rounded-2xl' />

                    <h2 className=" font-medium text-2xl ">Swine Feed</h2>

                    <div className="btn btn2 max-md:scale-90">
                        <FaArrowRight className="arr-2" />
                        <span className="text">Explore All</span>
                        <span className="circle"></span>
                        <FaArrowRight className="arr-1" />
                    </div>
                </a>

            </div>

        </section>
    )
}

export default page