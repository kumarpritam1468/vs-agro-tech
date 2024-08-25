"use client"

import { cattleFoods } from '@/app/data/data';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const { index } = useParams();

    const product = cattleFoods[index];
    return (
        <section className='bg2 h-[100svh] pt-[10svh] flex max-md:flex-col justify-center items-center gap-20 max-md:gap-10 pl-12 max-md:px-0'>
            <div className="relative w-fit h-fit max-md:w-2/5 max-md:mt-6">
                <div className=" w-full h-full bg-green-600 absolute top-4 left-4 z-20"></div>
                <div className=" w-full h-full bg-green-300 absolute top-8 left-8 z-10"></div>
                <Image src={product.imgUrl} alt="Cattle Food" width={300} height={450} className=" relative z-30" />
            </div>

            <div className="w-full pr-12 py-12 max-md:py-6 max-md:px-6 h-full overflow-y-auto flex flex-col gap-6 max-md:text-center max-md:items-center">
                <h1 className=" text-5xl font-medium">{product.name}</h1>

                <div className="flex flex-col gap-4 py-3">
                    <h2 className=' text-3xl font-medium'>Ingredients:</h2>
                    <p className=' text-lg'>
                        {product.ingredients}
                    </p>
                </div>
                <div className="flex flex-col gap-4 py-3">
                    <h2 className=' text-3xl font-medium'>Feeding Features:</h2>
                    <div className=' text-lg'>
                        {product.feedFeatures?.map((data, index) => (
                            <p key={index}>{index+1}. {data}</p>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 py-3">
                    <h2 className=' text-3xl font-medium'>Feeding Process:</h2>
                    <div className=' text-lg'>
                        {product.feedProcess?.map((data, index) => (
                            <p key={index}>{index+1}. {data}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page