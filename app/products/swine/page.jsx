"use client"

import ProductCard from '@/app/components/ProductCard'
import { swineDoses, swineFoods, swineNutrients } from '@/app/data/data'

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
                    Swine
                </motion.h1>

                <motion.h2
                    className=' text-center text-white mt-8 text-2xl'
                    variants={slideRight(0.2)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    Swine are friend to us since 7000 B.C. Pigs were domesticated almost 10000
                    years back and are part of civilization since then. We can see various examples
                    in different mythologies too. The skin of Pig is so similar that it can be used for
                    skin replacement of human. Pigs are farmed not only for their meat but have a
                    number of other uses like in medicines, paint brushes, grease, paints, etc
                </motion.h2>

                <motion.div
                    className=' flex max-md:flex-col justify-center items-center flex-wrap gap-10 py-10'
                    variants={slideRight(0.4)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    {swineFoods.map((item, index) => (
                        <ProductCard key={index} index={index} type="swine" name={item.name} imgUrl={item.imgUrl} desc="" />
                    ))}
                </motion.div>
                <h1 className=' font-semibold underline underline-offset-4 text-4xl mt-6 text-center text-white'>Nutrients Table</h1>

                <div className="overflow-x-auto py-12">
                    <table className="table bg-white table-zebra rounded-none table-lg max-md:table-sm w-8/12 max-md:w-full mx-auto">
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
                                <tr key={index}>
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

                <h1 className=' font-semibold underline underline-offset-4 text-4xl mt-6 text-center text-white'>Dosage Table</h1>

                <div className="overflow-x-auto py-12">
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
                </div>
            </div>

        </section>
    )
}

export default page