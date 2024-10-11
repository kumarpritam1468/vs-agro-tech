"use client"

import { motion } from "framer-motion";
import { slideRight } from "../../framer-configs/framerConfigs"
import { FaArrowRight } from 'react-icons/fa6';
import Image from "next/image";
import { dosesTable, nutrientsTable } from "@/app/data/data";
import Link from "next/link";

const page = () => {
    return (
        <section className='bg2-dark h-[100svh] pt-[10svh] px-6 '>
            <div className=" h-full w-full overflow-auto">
                <motion.h1
                    className=' font-semibold underline underline-offset-4 text-4xl mt-4 text-center text-white'
                    variants={slideRight(0)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    Cattle Feed
                </motion.h1>

                <motion.div
                    className="flex flex-col gap-4 py-3 text-white mt-6 px-36 max-md:px-6 max-lg:px-12 text-left"
                    variants={slideRight(0.2)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    <p className=' text-2xl mt-6 text-white'>
                        <span className=' font-medium underline pr-1'>Feeding Procedure:</span>A balanced Total Mixed Ration (TMR) for proper health and milk of cow. The TMR should consist of green fodder, dry fodder, concentrate feed and water.
                    </p>
                    <p className=' text-2xl mt-6 text-white'>
                        <span className=' font-medium underline pr-1'>Concentrate Feed:</span> Cow require around 1.5 kg of concentrate feed for body maintenance and 400 grams of feed for 1 ltr of milk produced. A continuous supply of water is very beneficial for milk production and fat.
                    </p>
                    <p className=' text-2xl mt-6 text-white'>
                        <span className=' font-medium underline pr-1'>Water:</span> 10 % of the body weight water is required for body maintenance and another 3-4 ltr of water per ltr of milk is required for milk production.
                    </p>
                    <p className=' text-2xl mt-6 text-white'>
                        <span className=' font-medium underline pr-1'>Fodder:</span> 2-3 kg of green fodder and 1 kg of dry fodder is necessary for every 1 ltr of milk produced should be given along with the concentrate feed.
                    </p>

                    <p className=" text-2xl mt-6 text-white">It is better to feed dry feed for munching.</p>
                </motion.div>

                <div className="flex gap-4 px-36 max-md:px-6 max-lg:px-12 justify-center items-center w-full h-fit mt-6">
                    <Image src="/bis.jpg" width={100} height={60} alt="BIS Mark" />
                    <p className=" text-2xl mt-8 text-white text-justify">BIS certificate under IS:2052:2009 CM/L-5200121874</p>
                </div>


                <h1 className=' font-semibold underline underline-offset-4 text-4xl mt-6 text-center text-white'>Standard Feed Quantity per day (as per body weight)</h1>

                <div className="overflow-x-auto py-12">
                    <table className="table bg-white table-zebra rounded-none table-lg max-md:table-sm w-9/12 max-md:w-full mx-auto">
                        {/* head */}
                        <thead>
                            <tr className=' text-lg max-md:text-base text-green-800 text-justify'>
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
                <h1 className=' font-semibold underline underline-offset-4 text-4xl mt-6 text-center text-white'>Nutrients Table</h1>

                <div className="overflow-x-auto py-12">
                    <table className="table bg-white table-zebra rounded-none table-lg max-md:table-sm w-9/12 max-md:w-full mx-auto">
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
                                <tr key={index} className=" text-center">
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

                <div
                    className=" mt-4 flex max-md:flex-col w-full justify-center items-center gap-6 mb-4"
                >
                    <Link href='/products/cattle/pellet' className=' p-2 rounded-2xl bg-green-100/80 hover:scale-[1.02] transition-all duration-500 ease-in-out flex flex-col items-center text-justify gap-2 cursor-pointer w-fit border-2 border-green-500'>
                        <Image src="/pellet.png" alt="Calf" width={200} height={200} className=' w-60 rounded-2xl' />

                        <h2 className=" font-medium text-2xl ">Pellet Feed</h2>

                        <div className="btn btn2 scale-90">
                            <FaArrowRight className="arr-2" />
                            <span className="text">Explore</span>
                            <span className="circle"></span>
                            <FaArrowRight className="arr-1" />
                        </div>
                    </Link>
                    <Link href='/products/cattle/mash' className=' p-2 rounded-2xl bg-green-100/80 hover:scale-[1.02] transition-all duration-500 ease-in-out flex flex-col items-center text-justify gap-2 cursor-pointer w-fit border-2 border-green-500'>
                        <Image src="/mash.png" alt="Calf" width={200} height={200} className=' w-60 rounded-2xl' />

                        <h2 className=" font-medium text-2xl ">Mash Feed</h2>

                        <div className="btn btn2 scale-90">
                            <FaArrowRight className="arr-2" />
                            <span className="text">Explore</span>
                            <span className="circle"></span>
                            <FaArrowRight className="arr-1" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default page