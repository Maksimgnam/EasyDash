import React from 'react';
import Image from 'next/image';

const Menu = () => {
    return (
        <div className='w-16 h-full bg-white flex flex-col items-center justify-between p-3 pl-0 pr-0'>
            <div className='w-11 h-11 bg-red-400 rounded flex items-center justify-center'>
                <p className='text-2xl font-medium'>M</p>
            </div>
            <div className='w-12 h-28 flex flex-col justify-between'>
                <div className='w-11 h-11 bg-slate-100 rounded flex items-center justify-center '>
                    <img className='w-7 h-7' src="https://cdn-icons-png.flaticon.com/256/3524/3524659.png" alt="" />
                </div>
                <div className='w-11 h-11 bg-slate-100 rounded flex items-center justify-center'>
                    <img className='w-6 h-6' src={`https://cdn-icons-png.flaticon.com/512/126/126467.png`} />
                </div>
            </div>

        </div>
    )
}

export default Menu