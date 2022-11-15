import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const redirectToDate = () => navigate('/date');

  return (
    <div className='flex h-screen w-screen justify-center items-center text-red-600 bg-slate-600 text-9xl'>
        <FontAwesomeIcon icon={faHeart} className="cursor-pointer active:text-7xl ease-in duration-200 drop-shadow-xl shadow-black" onClick={redirectToDate} />
    </div>
  )
}
