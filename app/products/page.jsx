import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'

const page = () => {
    return (
        <section className='bg2-dark h-[100svh] max-md:min-h-[100svh] max-md:h-fit pt-[10svh] flex max-md:flex-col justify-center items-center gap-10'>
            <a href='/products/cattle' className=' p-2 rounded-2xl bg-green-100/80 hover:scale-[1.02] transition-all duration-500 ease-in-out flex flex-col items-center text-center gap-4 cursor-pointer w-fit border-2 border-green-500'>
                <Image src="/calf.jpg" alt="Calf" width={200} height={200} className=' w-80  rounded-2xl' />

                <h2 className=" font-medium text-2xl ">Cattle Feed</h2>

                <div className="btn btn2 max-md:scale-90">
                    <FaArrowRight className="arr-2" />
                    <span className="text">Explore</span>
                    <span className="circle"></span>
                    <FaArrowRight className="arr-1" />
                </div>
            </a>
            <a href='/products/swine' className=' p-2 rounded-2xl bg-green-100/80 hover:scale-[1.02] transition-all duration-500 ease-in-out flex flex-col items-center text-center gap-4 cursor-pointer w-fit border-2 border-green-500'>
                <Image src="/pigs.jpg" alt="Calf" width={200} height={200} className=' w-80 rounded-2xl' />

                <h2 className=" font-medium text-2xl ">Swine Feed</h2>

                <div className="btn btn2 max-md:scale-90">
                    <FaArrowRight className="arr-2" />
                    <span className="text">Explore</span>
                    <span className="circle"></span>
                    <FaArrowRight className="arr-1" />
                </div>
            </a>
        </section>
    )
}

export default page