import ProductCard from '@/app/components/ProductCard'
import { cattleFoods, dosesTable, nutrientsTable } from '@/app/data/data'
import React from 'react'

const page = () => {
    return (
        <section className='bg2-dark min-h-screen h-fit pt-[10svh] px-6'>
            <h1 className=' font-semibold underline underline-offset-4 text-4xl mt-6 text-center text-white'>Cattle Foods</h1>

            <div className=' flex max-md:flex-col justify-center items-center flex-wrap gap-10 py-10'>
                {cattleFoods.map((item, index) => (
                    <ProductCard key={index} name={item.name} imgUrl={item.imgUrl} />
                ))}
            </div>


            <h1 className=' font-semibold underline underline-offset-4 text-4xl mt-6 text-center text-white'>Nutrients Table</h1>

            <div className="overflow-x-auto py-12">
                <table className="table bg-white table-zebra rounded-none table-lg max-md:table-sm w-8/12 max-md:w-full mx-auto">
                    {/* head */}
                    <thead>
                        <tr className=' text-lg max-md:text-base text-green-800'>
                            <th>Nutrients</th>
                            <th>Champion</th>
                            <th>Supreme</th>
                            <th>Premium</th>
                            <th>Popular</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nutrientsTable.map((data, index) => (
                            <tr key={index}>
                                <th> {data.head} </th>
                                <td> {data.champion} </td>
                                <td> {data.supreme} </td>
                                <td> {data.premium} </td>
                                <td> {data.popular} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h1 className=' font-semibold underline underline-offset-4 text-4xl mt-6 text-center text-white'>Dosage Table</h1>

            <div className="overflow-x-auto py-12">
                <table className="table bg-white table-zebra rounded-none table-lg max-md:table-sm w-11/12 max-md:w-full mx-auto">
                    {/* head */}
                    <thead>
                        <tr className=' text-lg max-md:text-base text-green-800 text-center'>
                            <th>Product</th>
                            <th>Body Maintainance <br /> Cow</th>
                            <th>Body Maintainance <br /> Buffalo</th>
                            <th>Milk Yield <br /> Cow </th>
                            <th>Milk Yield <br /> Buffalo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dosesTable.map((data, index) => (
                            <tr key={index}>
                                <th> {data.head} </th>
                                <td> {data.cowBM} </td>
                                <td> {data.buffaloBM} </td>
                                <td> {data.cowMY} </td>
                                <td> {data.buffaloMY} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default page