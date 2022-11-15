import React from 'react'
import pic1 from '../assets/pic1.jpg';
import pic5 from '../assets/pic5.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

export default function Date() {
    const navigate = useNavigate();

    const acceptRequest = () => navigate('/acception')
  return (
      <div className='bg-slate-900 w-screen h-screen'>
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
    <div className='flex justify-center'>
    <h1 className='text-2xl text-white text-center mt-12 absolute bg-slate-800 p-3 rounded-md shadow-md shadow-black'>Quer ser meu amor pra sempre?</h1>
    </div>
    <div className='flex w-screen h-screen justify-center items-center text-center bottom-44 relative'>
        <div className='w-32 p-1'>
            <img src={ pic1 } alt="" className='rounded-lg shadow-md shadow-black' />
        </div>
        <div className='w-32 p-1'>
        <img src={ pic5 } alt="" className='rounded-lg shadow-md shadow-black' />
        </div>
        <div className='w-32 p-1'>
        <img src={ pic3 } alt="" className='rounded-lg shadow-md shadow-black' />
        </div>
    </div>
    <div className='flex justify-center'>
    <div className='z-50 absolute top-80 border bg-white flex justify-center p-3 rounded-lg shadow-md shadow-black'>
    <img src={ pic4 } alt="" className='w-80 rounded-lg border border-gray-600' />
    </div>
    </div>
    <div className='flex gap-5 justify-center items-center relative bottom-32'>
    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm font-bold px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={acceptRequest}>Aceitar</button>
<button type="button" className="text-white bg-gray-700 dark:bg-gray-700 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-bold" disabled>Recusar</button>
    </div>
    </motion.div>
    </div>
  )
}
