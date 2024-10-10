import Image from 'next/image';

import { BsTwitterX } from "react-icons/bs";
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=' py-8 px-10 bg-green-50 border-t-2 border-t-gray-700'>
            <div className=" flex gap-16 max-md:gap-6 max-md:flex-col">
                <div className=' flex flex-col w-1/2 max-md:w-full'>
                    <Image src='/logo.png' alt='Logo' width={100} height={100} />
                    <h1 className=' font-medium text-xl mt-4'>V S Agrotech,</h1>
                    <h2 className=' text-lg'><span className=' font-semibold'>E-mail:</span> vsagrotech81@gmail.com</h2>
                    <h3 className=' text-lg'><span className=' font-semibold'>Customer helpline:</span> 82495-10313(10 am to 5 pm) </h3>
                    <p className=' text-sm font-normal mt-4'>
                        IDCO Plot NO.1, <br />
                        Indrani Patna industrial Area post, <br />
                        Chasapada, <br />
                        Choudwar, Cuttack 754027
                    </p>
                </div>

                {/* <div className=' flex flex-col pl-8 max-md:pl-0 border-l max-md:border-none border-l-gray-400'>
                        <h3 className=' font-medium text-lg mb-4'>Follow Us:</h3>
                        <div className=" flex gap-4 text-xl text-gray-500">
                            <BsTwitterX className=" cursor-pointer hover:text-black" />
                            <RiFacebookBoxFill className=" cursor-pointer hover:text-blue-500" />
                            <IoLogoInstagram className=" cursor-pointer hover:text-pink-500" />
                            <FaLinkedinIn className=" cursor-pointer hover:text-blue-500" />
                            <GrYoutube className=" cursor-pointer hover:text-red-500" />
                            <FaWhatsapp className=" cursor-pointer hover:text-green-500" />
                            <FaTelegram className=" cursor-pointer hover:text-blue-500" />
                        </div>
                </div> */}
            </div>
            <div className=" h-[1px] w-full my-6 sm:mx-auto bg-gray-400 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">VS Agrotech</a>. All Rights Reserved.</span>
        </footer>
    )
}

export default Footer