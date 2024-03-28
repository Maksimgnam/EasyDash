"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
interface Status {
    status: boolean
}
interface Time {
    [time: string]: Status

}
interface Table {
    id: string,
    days: {
        [day: string]: Time
    }

}

const Timetable = () => {
    const [table, setTable] = useState<Table[]>([]);

    const colors = ['#F69292', '#FFA726', '#CF8CEE', '#7FE4FA', '#4AE3B5']



    useEffect(() => {
        const fetchTable = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/table');
                const tables = await response.json();
                setTable(tables)

            } catch (error) {
                console.log(error)
            }
        }

        fetchTable()

    }, [])
    return (

        <div className='w-full h-full  pl-5'>

            {table.map((item) => (
                <div key={item.id} className='w-full h-full  flex justify-between'>
                    {Object.entries(item.days).map(([day, times]: [string, any]) => (
                        <div key={day} className='w-auto min-w-20  h-full '>
                            <div className='w-10/12 h-10 flex items-center  justify-between '>
                                <h3 className='text-xl font-medium'>{day}</h3>
                                <div className='w-7 h-7 bg-slate-200 rounded flex items-center justify-center'>
                                    <p>  {Object.entries(times).length}</p>
                                </div>
                            </div>


                            <div>
                                {Object.entries(times).map(([time, details]: [string, any]) => (
                                    <Link href={`/book/${item.id}/${day}/${time}`}>
                                        <div style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }} className='w-10/12 h-12  rounded flex items-center justify-center m-2 ml-0' key={time}>
                                            <p className='text-lg text-white font-medium '> {time}</p>

                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}

        </div>
    )
}

export default Timetable
