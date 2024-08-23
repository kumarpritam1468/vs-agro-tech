import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const ProductCard = ({ name, imgUrl }) => {
    return (
        <div className=" flex-1 flex items-center justify-center gap-4 backdrop-blur-sm p-3 border-2 border-green-500 bg-green-100/80 text-black rounded-2xl">

            <Image src={imgUrl} alt={name} width={200} height={200} className="w-1/3 rounded-2xl" />

            <div className=' flex flex-col gap-4 justify-center items-center text-center'>
                <h2 className=" font-medium text-xl text-center">{name}</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugit error dolorum quam repellat quis cupiditate, minima culpa esse natus?</p>

                <button className="btn btn2 max-md:scale-90">
                    <FaArrowRight className="arr-2" />
                    <span className="text">View Now</span>
                    <span className="circle"></span>
                    <FaArrowRight className="arr-1" />
                </button>
            </div>
        </div>
    )
}

export default ProductCard