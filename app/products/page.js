import React from 'react'
import { topProducts } from '../data/data'
import ProductCard from '../components/ProductCard'

const page = () => {
    return (
        <section className='bg2 min-h-[100svh] h-fit pt-[10svh] px-12 pb-10'>
            <div className=' w-full mt-10 '>
                <h1 className=" text-5xl font-medium text-black underline underline-offset-8 text-center">Cattle Foods</h1>

                <div className=' w-full mt-8 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-16 gap-y-10 '>
                    {topProducts.map((item, index) => (
                        <ProductCard key={index} name={item.name} />
                    ))}
                </div>
            </div>

            <div className=' w-full mt-20 '>
                <h1 className=" text-5xl font-medium text-black underline underline-offset-8 text-center">Swine Foods</h1>

                <div className=' w-full mt-8 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-16 gap-y-10 '>
                    {topProducts.map((item, index) => (
                        <ProductCard key={index} name={item.name} />
                    ))}
                    {topProducts.map((item, index) => (
                        <ProductCard key={index} name={item.name} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default page