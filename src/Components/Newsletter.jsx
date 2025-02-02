import React, { useState } from 'react'
import letter from '../assets/letter.png'
import { motion } from 'framer-motion'

const Newsletter = () => {
   const [submit, setSubmit] = useState("Sign to Newsletter")

    function pressed(){
        setSubmit("Thankyou for Signing")
    };

    return (
        <div className='py-16 w-[91%] overflow-hidden md:w-[84.4%] justify-center gap-6  lg:gap-32 flex flex-col-reverse md:flex-row bg-[#A1A6DC] rounded-2xl -mb-10  mt-28 mx-auto relative '>

            <div className='relative flex justify-center items-center '>
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}

                >
                    <img className='mx-auto  relative flex items-center' src={letter} alt="" />
                </motion.div>
            </div>

            <div className=' max-w-md relative mx-auto md:mx-0 text-center md:text-start'>
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}

                >
                    <h1 className='md:text-[45px] text-[35px]   font-bold text-[#3E3126]'>Sign up for our newsletter</h1>
                </motion.div>
                    <hr className='max-w-[80%] mx-auto md:mx-0 bg-[#3E3126] realtive px-4' />
                    <p className='max-w-sm vm_text text-sm my-3'>Stay informed and inspired! Sign up for our newsletter to receive exclusive content, Don't miss out on the latest insights. Join our community today!</p>

                    <input className='mt-6 shadow-xl mb-6 rounded-lg bg-[#D4D6ED] border-[1.5px] md:w-[70%] w-[90%] h-[40px] border-[#3E3126]' type="email" placeholder='Enter your E-mail' />

                    <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}} onClick={pressed} className='  shadow-xl mx-auto md:mx-0  bg-[#C6C9E3] rounded-full px-6 py-[6px]  my-3 font-medium text-[#3E3126] flex relative '>{submit}</motion.button>

            </div>

        </div>

    )
}

export default Newsletter