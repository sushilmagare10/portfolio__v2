import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

const Stack = () => {

    const words = [
        {
            text: "What",
        },
        {
            text: "I",
        },
        {
            text: "DO",
            className: "text-purple font-extrabold text-6xl ",
        },
        {
            text: "/",
        },
    ];

    return (
        <div id='stack' className=' h-full w-full flex flex-col justify-center items-center my-10'>
            <div className=' flex justify-center text-[5vw] font-bold text-white items-start h-full w-full'>
                {/* <TypewriterEffectSmooth words={words} /> */}
                What i Do ?
            </div>
            {/* left side */}
            <div className=' w-full h-full gap-6 flex mt-5 justify-between items-center text-white '>
                <div className=' flex-1 justify-center items-center px-10 font-bold text-7xl h-[30vh]'>
                    For Frontend
                </div>
                <div className=' flex-1'>

                    <div className=' grid grid-cols-8 h-full  gap-3'>
                        <span className='col-span-3 text-center row-span-2 bg-red-500  p-10 rounded-xl'>Nextjs</span>
                        <span className='col-span-2 p-10 bg-blue-500 rounded-xl'>Tailwind</span>
                        <span className='col-span-3  p-10 bg-violet-500 rounded-xl'>Framer Motion</span>
                        <span className='col-span-3  p-10 bg-green-500 rounded-xl'>GSAP</span>
                        <span className='col-span-2 place-self-center h-full w-full p-10  bg-yellow-500 rounded-xl'>Javascript</span>
                    </div>
                </div>
            </div>
            {/* right side */}
            <div></div>
        </div>
    )
}

export default Stack