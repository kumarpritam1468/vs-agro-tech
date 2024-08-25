import ProductCard from '@/app/components/ProductCard'
import { swineFoods } from '@/app/data/data'
import React from 'react'

const page = () => {
    return (
        <section className='bg3-dark h-[100svh] pt-[10svh] px-6'>
            <div className=' h-full w-full overflow-auto'>
                <h1 className=' font-semibold underline underline-offset-4 text-4xl mt-6 text-center text-white'>Swine Foods</h1>

                <div className=' flex max-md:flex-col justify-center items-center flex-wrap gap-10 py-10'>
                    {swineFoods.map((item, index) => (
                        <ProductCard key={index} index={index} type="swine" name={item.name} imgUrl={item.imgUrl} desc="" />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default page