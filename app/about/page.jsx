import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <section className='bg2-dark h-[100svh] flex justify-center items-center max-md:flex-col text-white px-40 max-lg:gap-10  max-lg:px-6 max-lg:py-36'>
            <div className=' flex flex-col gap-8 flex-1'>
                <h1 className=' text-5xl font-medium'>About Us</h1>
                <div className=' flex flex-col'>
                    <Image src='/logo.png' alt='Logo' width={100} height={100} />
                    <h1 className=' font-medium text-3xl mt-4'>V S Agrotech,</h1>
                    <h2 className=' text-xl'>Year of establishment: 2022</h2>
                    <h2 className=' text-lg'>Go seva learnt from the teaching of lord Krishna</h2>
                    <p className=' text-base font-normal mt-6'>
                        IDCO Plot NO.1, <br />
                        Indrani Patna industrial Area post, <br />
                        Chasapada, <br />
                        Choudwar, Cuttack 754027
                    </p>
                </div>
            </div>

            <div className=' flex-1 relative flex justify-center items-center'>
                <img src="" alt="Company Photo" />
            </div>
        </section>
    )
}

export default page