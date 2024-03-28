"use client"
import React from 'react';
import Image from 'next/image';
import booked from '../Images/booked.png';


const Header = () => {

    return (
        <div className='w-full h-14  flex  items-center justify-between  p-5 pr-9 pt-0 pb-0  '>
            <div className='w-32 h-full  flex items-center '>
                <h3 className='text-2xl font-medium'>Upmeets</h3>
            </div>
            <div className='w-2/5 h-full flex items-center justify-between '>
                <input placeholder='Search...' type="text" className='w-56 h-9 bg-gray-200   rounded outline-none  pl-2    ' />
                <p className='text-xl font-medium'>Entiers for:  </p>
                <span className='text-xl text-red-500 font-medium'>March 23-30</span>
            </div>



        </div>
    )
}

export default Header