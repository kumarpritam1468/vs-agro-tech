"use client"

import { motion } from "framer-motion";
import { slideRight } from "../../framer-configs/framerConfigs"
import { FaArrowRight } from 'react-icons/fa6';
import Image from "next/image";

const page = () => {
    return (
        <section className='bg2-dark h-[100svh] pt-[10svh] px-6'>
            <div className=" h-full w-full overflow-auto">
                <motion.h1
                    className=' font-semibold underline underline-offset-4 text-4xl mt-4 text-center text-white'
                    variants={slideRight(0)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    Cattle
                </motion.h1>

                <motion.h2
                    className=' text-center text-white mt-4 text-lg'
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
                className=" mt-4 flex max-md:flex-col w-full justify-center items-center gap-6"
                variants={slideRight(0.4)}
                    initial={"initial"}
                    whileInView={'animate'}
                    viewport={{ once: true }}
                >
                    <div className=' p-2 rounded-2xl bg-green-100/80 hover:scale-[1.02] transition-all duration-500 ease-in-out flex flex-col items-center text-center gap-2 cursor-pointer w-fit border-2 border-green-500'>
                        <Image src="/pellet.png" alt="Calf" width={200} height={200} className=' w-60 rounded-2xl' />

                        <h2 className=" font-medium text-2xl ">Pellet Feed</h2>

                        <a href='/products/cattle/pellet' className="btn btn2 scale-90">
                            <FaArrowRight className="arr-2" />
                            <span className="text">Explore</span>
                            <span className="circle"></span>
                            <FaArrowRight className="arr-1" />
                        </a>
                    </div>
                    <div className=' p-2 rounded-2xl bg-green-100/80 hover:scale-[1.02] transition-all duration-500 ease-in-out flex flex-col items-center text-center gap-2 cursor-pointer w-fit border-2 border-green-500'>
                        <Image src="/mash.png" alt="Calf" width={200} height={200} className=' w-60 rounded-2xl' />

                        <h2 className=" font-medium text-2xl ">Mash Feed</h2>

                        <a href='/products/cattle/mash' className="btn btn2 scale-90">
                            <FaArrowRight className="arr-2" />
                            <span className="text">Explore</span>
                            <span className="circle"></span>
                            <FaArrowRight className="arr-1" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default page