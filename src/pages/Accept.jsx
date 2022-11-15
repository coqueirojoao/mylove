import React, { useEffect, useState } from 'react'
import pic2 from '../assets/pic2.jpg';
import ceuazul from '../assets/ceuazul.mp3'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion"

export default function Accept() {
    const playMusic = () => {
      const music = new Audio(ceuazul);
      music.volume = 0.5
      music.play()
    }
  return (
    <div className='bg-slate-900 h-screen w-screen flex flex-col items-center'>
        <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
        <h1 className='text-xl text-white text-center py-10'>Vou te amar por toda <strong className='text-red-600'>minha vida!</strong></h1>
        <img src={pic2} className='w-80 relative rounded-md shadow-md shadow-black' />
        <div className='flex justify-center'>
        <FontAwesomeIcon icon={faHeart} className="cursor-pointer mt-8 text-7xl text-red-700 drop-shadow-xl shadow-black" onClick={playMusic} />
        </div>
        </motion.div>
    </div>
  )
}
