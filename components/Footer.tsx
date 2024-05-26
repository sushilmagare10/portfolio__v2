import { navItems, socialMedia } from '@/data'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full h-full mt-16  my-4 md:my-8">
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                />
            </div>
            <div className=' flex justify-between items-center h-full px-5 lg:px-44 my-10'>
                <div className=' flex flex-col justify-start gap-2 items-start'>
                    <p className=' text-purple font-medium text-3xl md:text-4xl lg:text-5xl '>
                        Navigation
                    </p>
                    <div className=' flex gap-1 flex-col'>
                        {navItems.map((navItem: any, idx: number) => (
                            <Link
                                key={`link=${idx}`}
                                href={navItem.link}
                                className={cn(
                                    "relative text-neutral-50 items-center font-medium flex space-x-1 hover:text-neutral-300 "
                                )}
                            >
                                <span className="block sm:hidden">{navItem.icon}</span>
                                <span className=" text-xl !cursor-pointer">{navItem.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col justify-start gap-2 items-start '>
                    <span className=' text-purple font-medium text-3xl md:text-4xl lg:text-5xl mt-3'>Social Links</span>
                    <div className=' flex gap-2 flex-col'>
                        {socialMedia.map((info) => (
                            <Link href={info.link} target='_blank' key={info.id} className=' flex gap-3 justify-start items-center'>
                                <div className="w-9 h-9 cursor-pointer flex  justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                                    <img src={info.img} alt="icons" width={20} height={20} />
                                </div>
                                <span className=' font-medium text-xl text-white-200'>
                                    {info.title}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
            <div className=' flex px-5 justify-start flex-col md:flex-row items-start lg:px-44 text-white font-bold text-4xl gap-2'>
                <span>
                    Folio @ 2024
                </span>
                <span>
                    Sushil Magare
                </span>
            </div>
        </footer>
    )
}

export default Footer