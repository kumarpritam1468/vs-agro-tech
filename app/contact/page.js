import React from 'react'

const page = () => {
    return (
        <section className='bg5 h-[100svh] flex justify-center items-center max-md:flex-col text-white px-40 max-lg:gap-10  max-lg:px-6 max-lg:py-36'>
            <div className=' flex flex-col gap-8 flex-1'>
                <h1 className=' text-6xl font-medium'>Let's Connect</h1>
                <div className=' flex flex-col'>
                    <h2 className=' text-2xl font-medium'>Email</h2>
                    <p className=' text-base font-extralight -mt-1'>test-test-test@gmail.com</p>
                </div>
                <div className=' flex flex-col'>
                    <h2 className=' text-2xl font-medium'>Phone</h2>
                    <p className=' text-base font-extralight -mt-1'>+91 1234567890</p>
                </div>
                <div className=' flex flex-col'>
                    <h2 className=' text-2xl font-medium'>Address</h2>
                    <p className=' text-base font-extralight -mt-1'>Cuttack, Odisha, India</p>
                </div>
            </div>

            <div className=' flex-1 relative'>
                <form className=' flex flex-col gap-4 items-center '>
                    <input type="text" placeholder='Name' required className='contact-input' name='from_name' />
                    <input type="email" placeholder='E-Mail' required className='contact-input' name='from_email' />
                    <textarea placeholder='Message' rows={6} required className='contact-input' name='message' />
                    <div className=' w-5/6 max-lg:w-full'>
                        <button className=' w-full bg-green-500 text-white font-medium py-2 mt-2 rounded-r-full rounded-bl-full transition-all duration-300 ease-in-out hover:rounded-tl-full hover:bg-white hover:text-green-600 flex gap-2 justify-center items-center' type='submit'>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default page