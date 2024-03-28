"use client";
import Link from 'next/link';
import { FC, useState } from 'react';

interface Params {
    params: { time: string, day: string, id: any }

}

const Page: FC<Params> = ({ params }) => {
    const colors = ['#F69292', '#FFA726', '#CF8CEE', '#7FE4FA', '#4AE3B5']
    const currentDate = new Date();
    const time = params.time.replace('%3A', ':')
    const [workspaceData, setWorkspaceData] = useState({
        name: '',
        surname: '',
        email: '',
        day: `${params.day}`,
        time: `${time}`,
        createdDate: `${currentDate.getDate()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear().toString().padStart(2, '0')}`,

    })

    const Submit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/create-entire', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(workspaceData),
            });

            const result = await response.json();
            console.log(result);

            setWorkspaceData({
                name: '',
                surname: '',
                email: '',
                day: `${params.day}`,
                time: `${time}`,
                createdDate: `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`,
            });


        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };
    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setWorkspaceData({
            ...workspaceData,
            [name]: value,
        });
    };


    return (
        <div className='w-full h-full flex flex-col items-center  '>
            <div className='w-full h-14 flex items-center pl-3'>
                <Link href='/'>


                    <button className='w-10 h-10 bg-slate-100 rounded flex items-center justify-center '>
                        <img className='w-9 h-9' src="https://static.thenounproject.com/png/1410611-200.png" alt="" />

                    </button>
                </Link>
                <h3 className='text-xl font-medium pl-2'>Entire on</h3>
                <div style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }} className='w-24 h-8 rounded  flex items-center justify-center relative left-2'>

                    <p className='text-md font-medium'>    {params.day}</p>
                </div>
            </div>
            <div className='w-full h-4/5 flex items-center justify-center'>


                <form onSubmit={Submit} className='w-3/12 h-5/6  rounded-md flex flex-col '>

                    <div className='w-full h-10 flex items-center '>
                        <h3 className='text-2xl font-medium '>Time: </h3>

                        <div style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }} className='w-20 h-7  rounded  flex items-center justify-around  relative left-3 pl-1'>
                            <p className='text-md font-medium'>{time}</p>
                            <img className='w-4 h-4 relative right-1' src="https://cdn-icons-png.flaticon.com/512/826/826165.png" alt="" />
                        </div>
                    </div>

                    <div className='w-11/12 h-56 flex flex-col justify-around '>
                        <input placeholder='Name' id='name' name='name' value={workspaceData.name} onChange={inputChange} className='w-11/12 h-14 text-lg font-medium placeholder:text-gray-400 bg-white rounded border-2 border-bg-gray-100 outline-none pl-2' type="text" />
                        <input placeholder='Surname' id='surname' name='surname' value={workspaceData.surname} onChange={inputChange} className='w-11/12 h-14 text-lg font-medium placeholder:text-gray-400 bg-white rounded border-2 border-bg-gray-100 outline-none pl-2' type="text" />
                        <input placeholder='Email' id='email' name='email' value={workspaceData.email} onChange={inputChange} className='w-11/12 h-14 text-lg font-medium placeholder:text-gray-400 bg-white rounded border-2 border-bg-gray-100 outline-none pl-2' type="text" />
                    </div>
                    <button type='submit' style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }} className='w-10/12 h-14 rounded-md '>
                        <p className='text-xl font-medium '>Book entier</p>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;

// "use client"
// import React, { FC } from 'react'
// interface Params {
//     params: { time: string, day: string, id: any }

// }
// const page:FC<Params> = ({params}) => {
//     return (
//         <div></div>
//     )
// }

// export default page
// 'use client'
// import React, { FC, useEffect, useState } from 'react';

// interface Params {
//     params: { time: string, day: string, id: any }
// }

// const Page: FC<Params> = ({ params }) => {
//     const [data, setData] = useState<any>(null);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`http://localhost:8000/api/table/${params.id}/${params.day}/${params.time}`);

//                 if (!response.ok) {
//                     const errorData = await response.json();
//                     throw new Error(errorData.error);
//                 }

//                 const responseData = await response.json();
//                 setData(responseData);
//             } catch (error) {
//                 console.log(error)
//             }
//         };

//         fetchData();
//     }, [params]);

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     if (!data) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h1>Status for {data.time}</h1>
//             <p>Status: {data.status === true && (<p>ddd</p>)}</p>
//         </div>
//     );
// };

// export default Page;



// 'use client'
// import React, { FC } from 'react';

// interface props {
//     params: { time: string, day: string, id: any }

// }

// const page: FC<props> = ({ params }) => {
//     const formattedTime = params.time.replace('%3A', ':');

//     return (
//         <div>
//             {params.day}
//             {params.id}
//             {formattedTime}
//         </div>
//     )
// }

// export default page
// 'use client'
// import { useEffect, useState } from 'react';

// function BookPage() {
//     const [bookInfo, setBookInfo] = useState({
//         id: '',
//         day: '',
//         time: ''
//     });

//     useEffect(() => {
//         const urlParams = new URLSearchParams(window.location.search);
//         const id = urlParams.get('id');
//         const day = urlParams.get('day');
//         const time = urlParams.get('time');

//         if (id && day && time) {
//             const fetchData = async () => {
//                 try {
//                     const response = await fetch(`http://localhost:3000/book/${id}/${day}/${time}`);
//                     const data = await response.json();
//                     console.log(data);
//                     setBookInfo({ id, day, time }); // Store the extracted data in state
//                 } catch (error) {
//                     console.error('Error fetching data:', error);
//                 }
//             };

//             fetchData();
//         }
//     }, []);

//     return (
//         <div>
//             <h1>Book Information</h1>
//             <p>ID: {bookInfo.id}</p>
//             <p>Day: {bookInfo.day}</p>
//             <p>Time: {bookInfo.time}</p>
//             {/* Additional component JSX */}
//         </div>
//     );
// }

// export default BookPage;




// 'use client'
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from '../../../../../../utils/usePathname'; // Assuming you have a custom hook to get the pathname

// async function getBookInfo(id: string, day: string, time: string) {
//     const res = await fetch(`http://localhost:3000/book/${id}/${day}/${time}`);
//     const result = await res.json();
//     return result;
// }

// const BookInfo: React.FC = () => {
//     const pathname = usePathname(); // Using the custom hook to get the pathname
//     const [bookInfo, setBookInfo] = useState<any>(null);
//     const [extractedTime, setExtractedTime] = useState<string>('');

//     useEffect(() => {
//         const [, , id, day, time] = pathname.split('/'); // Extracting dynamic parameters from the pathname

//         if (id && day && time) {
//             setExtractedTime(time); // Setting the extracted time to state

//             const fetchBookInfo = async () => {
//                 const fetchedBookInfo = await getBookInfo(id, day, time);
//                 setBookInfo(fetchedBookInfo);
//             };

//             fetchBookInfo();
//         }
//     }, [pathname]);

//     if (!bookInfo) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className='w-full h-full'>
//             <div className='w-full h-14 flex items-center justify-center'>
//                 <h2 className='text-2xl font-medium'>Book Information</h2>
//             </div>
//             <div className='w-full h-5/6 '>
//                 <div className='flex'>
//                     <div className="w-post h-auto border-2 border-slate-100 rounded-xl m-6 mt-1 p-2 relative left-2 ">
//                         <h2 className="text-2xl font-medium">{bookInfo.title}</h2>
//                         <div className="w-full h-auto p-1">
//                             <p className=" text-xl">{bookInfo.description}</p>
//                             <p className=" text-xl">Time: {extractedTime}</p> {/* Displaying the extracted time */}
//                         </div>
//                         <div className="w-full h-10 flex justify-end pl-2">
//                             <button className="w-24 h-10 bg-sky-400 rounded-2xl relative right-3">
//                                 <Link href="/">
//                                     <p className="text-md font-medium text-white">Назад</p>
//                                 </Link>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookInfo;




// 'use client'
// import Link from 'next/link';
// import { useState, useEffect } from 'react';


// const Page = () => {


//     const colors = ['#F69292', '#FFA726', '#CF8CEE', '#7FE4FA', '#4AE3B5'];
//     const currentDate = new Date();
//     const [workspaceData, setWorkspaceData] = useState({
//         name: '',
//         surname: '',
//         email: '',
//         createdDate: `${currentDate.getDate()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear().toString().padStart(2, '0')}`,
//     });

//     const Submit = async (event: React.FormEvent) => {
//         event.preventDefault();

//         try {
//             const response = await fetch('http://localhost:8000/api/create-entire', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(workspaceData),
//             });

//             const result = await response.json();
//             console.log(result);

//             setWorkspaceData({
//                 name: '',
//                 surname: '',
//                 email: '',
//                 createdDate: `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`,
//             });
//         } catch (error) {
//             console.error('Error submitting data:', error);
//         }
//     };

//     const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = event.target;
//         setWorkspaceData({
//             ...workspaceData,
//             [name]: value,
//         });
//     };

//     return (
//         <div className='w-full h-full flex flex-col items-center'>
//             <div className='w-full h-14 flex items-center pl-3'>
//                 <Link href='/'>
//                     <button className='w-10 h-10 bg-slate-100 rounded flex items-center justify-center '>
//                         <img className='w-9 h-9' src="https://static.thenounproject.com/png/1410611-200.png" alt="" />
//                     </button>
//                 </Link>
//             </div>
//             <div className='w-full h-4/5 flex items-center justify-center'>
//                 <form onSubmit={Submit} className='w-3/12 h-5/6 rounded-md flex flex-col '>
//                     <div className='w-full h-10 flex items-center '>
//                         <h3 className='text-2xl font-medium'>Entier on: </h3> {/* Displaying time from the URL */}
//                         <div style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }} className='w-20 h-7 rounded flex items-center justify-around relative left-3 pl-1'>
//                             <p className='text-md font-medium'>12:00</p>
//                             <img className='w-4 h-4 relative right-1' src="https://cdn-icons-png.flaticon.com/512/826/826165.png" alt="" />
//                         </div>
//                     </div>
//                     <div className='w-11/12 h-56 flex flex-col justify-around '>
//                         <input placeholder='Name' id='name' name='name' value={workspaceData.name} onChange={inputChange} className='w-11/12 h-14 text-lg font-medium placeholder:text-gray-400 bg-white rounded border-2 border-bg-gray-100 outline-none pl-2' type="text" />
//                         <input placeholder='Surname' id='surname' name='surname' value={workspaceData.surname} onChange={inputChange} className='w-11/12 h-14 text-lg font-medium placeholder:text-gray-400 bg-white rounded border-2 border-bg-gray-100 outline-none pl-2' type="text" />
//                         <input placeholder='Email' id='email' name='email' value={workspaceData.email} onChange={inputChange} className='w-11/12 h-14 text-lg font-medium placeholder:text-gray-400 bg-white rounded border-2 border-bg-gray-100 outline-none pl-2' type="text" />
//                     </div>
//                     <button type='submit' style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }} className='w-10/12 h-14 rounded-md '>
//                         <p className='text-xl font-medium'>Book entier</p>
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Page;


// // pages/[bookId].js


