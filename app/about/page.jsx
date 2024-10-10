import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <section className='bg2-dark h-[100svh] flex justify-center items-center max-md:flex-col text-white px-40 max-lg:gap-10  max-lg:px-6 max-lg:py-36'>
            <div className=' flex flex-col justify-center items-center text-center gap-4 flex-1'>
                {/* <h1 className=' text-5xl font-medium'>About Us</h1> */}
                <div className=' flex flex-col gap-4 justify-center items-center'>
                    {/* <Image src='/logo.png' alt='Logo' width={100} height={100} /> */}
                    <h1 className=' font-semibold text-4xl'>V S Agrotech</h1>
                    <h2 className=' text-2xl font-medium'>Year of establishment: 2022</h2>
                    <h2 className=' text-2xl font-medium'>Go seva learnt from the teaching of lord Krishna</h2>
                    <div className=' text-xl flex flex-col gap-2'>
                        <p>

                            Animal farming or Animal husbandry is a major occupation since time
                            immemorial. The relation is so deep that it has become a part of our
                            mythology. May it be 'Krishna' or 'Baraha'. We depend on animal farms
                            for milk, meat, leather and many more. It may be cattle, swine, poultry,
                            goat, sheep, etc.
                        </p>
                        <p>
                            Feed is the most crucial component in any animal farm. Feeds constitutes
                            around 60% of the total expenditure.
                        </p>
                        <p>
                            With a view to provide the best feed at an affordable price the unit was
                            established in the year 2022 and serving since then.
                        </p>

                    </div>
                </div>
            </div>

            {/* <div className=' flex-1 relative flex justify-center items-center'>
                <img src="" alt="Company Photo" />
            </div> */}
        </section>
    )
}

export default page