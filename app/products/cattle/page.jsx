"use client"

import ProductCard from '@/app/components/ProductCard'
import { cattleFoods, dosesTable, nutrientsTable } from '@/app/data/data'

import { motion } from "framer-motion";
import { slideRight } from "../../framer-configs/framerConfigs"

const page = () => {
    return (
        <section className='bg2-dark h-[100svh] pt-[10svh] px-6'>
            <div className=" h-full w-full overflow-auto">
                <motion.h1
                    className=' font-semibold underline underline-offset-4 text-4xl mt-6 text-center text-white'
                    variants={slideRight(0)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    Cattle
                </motion.h1>

                <motion.h2
                    className=' text-center text-white mt-8 text-2xl'
                    variants={slideRight(0.2)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    Cow can never be separated from our society. Referred as “MAA” or “MATA”
                    cow is loved just like mother is said to have all Gods in her body. Closely
                    associated since more than 12000 years is integrate part of our daily life. Lord
                    Krishna having cannot be imagined without cow. Cow give us Milk, dung, urine
                    etc.
                </motion.h2>

                <motion.div
                    className=' flex flex-col gap-2 mt-6 text-white ml-6'
                    variants={slideRight(0.4)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    <h2 className=' text-3xl font-semibold underline text-center'>Pellet Feed</h2>
                </motion.div>

                <motion.div className=' flex max-md:flex-col justify-center items-center flex-wrap gap-10 py-10'
                    variants={slideRight(0.6)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    {cattleFoods.slice(0, 5).map((item, index) => (
                        <ProductCard key={index} index={index} type={"cattle"} name={item.name} imgUrl={item.imgUrl} desc={item.desc} />
                    ))}
                </motion.div>

                {/* <motion.div
                    className=' flex flex-col gap-2 mt-6 text-white ml-6'
                    variants={slideRight(0)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    <h2 className=' text-3xl font-semibold underline text-center'>Mash Feed</h2>
                </motion.div>

                <motion.div className=' flex max-md:flex-col justify-center items-center flex-wrap gap-10 py-10'
                    variants={slideRight(0)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    {cattleFoods.slice(5, 7).map((item, index) => (
                        <ProductCard key={index} index={index} type={"cattle"} name={item.name} imgUrl={item.imgUrl} desc={item.desc} />
                    ))}
                </motion.div> */}


                <h1 className=' font-semibold underline underline-offset-4 text-4xl mt-6 text-center text-white'>Nutrients Table</h1>

                <div className="overflow-x-auto py-12">
                    <table className="table bg-white table-zebra rounded-none table-lg max-md:table-sm w-8/12 max-md:w-full mx-auto">
                        {/* head */}
                        <thead>
                            <tr className=' text-lg max-md:text-base text-green-800'>
                                <th>Nutrients</th>
                                <th>Royal</th>
                                <th>Champion</th>
                                <th>Supreme</th>
                                <th>Premium</th>
                                <th>Popular</th>
                            </tr>
                        </thead>
                        <tbody>
                            {nutrientsTable.map((data, index) => (
                                <tr key={index}>
                                    <th> {data.head} </th>
                                    <td> {data.royal} </td>
                                    <td> {data.champion} </td>
                                    <td> {data.supreme} </td>
                                    <td> {data.premium} </td>
                                    <td> {data.popular} </td>
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
                                <th>Milk <br /> Production(ltr)</th>
                                <th>Concentrate <br /> Feed(kg)</th>
                                <th>Green <br /> Fodder(kg)</th>
                                <th>Dry <br /> Fodder(kg)</th>
                                <th>Water(ltr)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dosesTable.map((data, index) => (
                                <tr key={index} className=' text-center'>
                                    <th> {data.head} </th>
                                    <td> {data.milkProd} </td>
                                    <td> {data.concentrate} </td>
                                    <td> {data.grnFodder} </td>
                                    <td> {data.dryFodder} </td>
                                    <td> {data.water} </td>
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