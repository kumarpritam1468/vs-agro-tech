import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const ProductCard = ({ name }) => {
    return (
        <div className=" flex-1 flex flex-col items-center justify-center gap-4 backdrop-blur-sm p-3 h-fit  border-2 border-green-500 bg-green-100/80 text-black">

            <Image src='/calf.jpg' alt={name} width={200} height={200} className="w-full" />

            <h2 className=" font-medium text-2xl">{name}</h2>

            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugit error dolorum quam repellat quis cupiditate, minima culpa esse natus?</p> */}

            <button className="btn max-md:scale-90">
                <FaArrowRight className="arr-2" />
                <span className="text">View Now</span>
                <span className="circle"></span>
                <FaArrowRight className="arr-1" />
            </button>
        </div>
    )
}

export default ProductCard