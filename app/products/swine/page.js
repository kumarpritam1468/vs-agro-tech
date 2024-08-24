import ProductCard from '@/app/components/ProductCard'
import { swineFoods } from '@/app/data/data'
import React from 'react'

const page = () => {
    return (
        <section className='bg3-dark min-h-screen h-fit pt-[10svh] px-6'>
            <h1 className=' font-semibold underline underline-offset-4 text-4xl mt-6 text-center text-white'>Swine Foods</h1>

            <div className=' flex max-md:flex-col justify-center items-center flex-wrap gap-10 py-10'>
                {swineFoods.map((item, index) => (
                    <ProductCard key={index} name={item.name} imgUrl={item.imgUrl} />
                ))}
            </div>
        </section>
    )
}

export default page