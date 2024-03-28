'use client'
import React, { useEffect, useState } from 'react';


interface Entire {
    id: any,
    name: string,
    surname: string,
    time: string,
    day: string,
    email: string
}
function TableHistory() {


    const [entiers, setEntiers] = useState<Entire[]>([])
    useEffect(() => {
        const fetchEntiers = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/entiers');
                const entiers = await response.json();
                setEntiers(entiers)


            } catch (error) {
                console.log(error)
            }

        }
        fetchEntiers()
    })

    return (
        <div className='w-full h-full flex flex-col   items-center pt-2'>
            <h3 className='text-xl font-medium'>Booked orders</h3>
            {
                entiers.map((item) => (
                    <div key={item.id} className='w-9/12 h-12 shadow rounded flex items-center justify-around m-2 ml-0 mr-0'>
                        <p className='text-md font-medium'>{item.day}</p>
                        <div className='w-12 h-7 bg-rose-300 rounded flex items-center justify-center'>
                            <p className='text-sm font-medium'>{item.time}</p>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default TableHistory