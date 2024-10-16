import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { FaArrowRight } from 'react-icons/fa6'

const ProductCard = ({ index, type, name, imgUrl, desc }) => {
    return (
        <Link href={`/products/${type}`} className=" w-[45%] max-md:w-11/12 flex items-center justify-between gap-4 backdrop-blur-sm p-3 border-2 border-green-500 bg-green-100/80 text-black rounded-2xl hover:scale-[1.03] transition-all duration-300 ease-in-out">

            <Image src={imgUrl} alt={name} width={200} height={200} className="w-1/3 rounded-2xl" />

            <div className=' w-2/3 flex flex-col gap-4 justify-center items-center text-justify'>
                <h2 className=" font-medium text-xl text-justify">{name}</h2>

                <p>{desc}</p>

                {/* <a href={`/products/${type}/${index}`} className="btn btn2 max-md:scale-[0.8]">
                    <FaArrowRight className="arr-2" />
                    <span className="text">View</span>
                    <span className="circle"></span>
                    <FaArrowRight className="arr-1" />
                </a> */}
            </div>
        </Link>
    )
}

export default ProductCard