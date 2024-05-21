"use client";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import Link from "next/link";


const Portfolio = () => {
    return (
        <div className="py-20">
            <h1 className="heading">
                A small selection of{" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                {projects.map((item) => (
                    <div
                        className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                        key={item.id}
                    >
                        <PinContainer
                            title={item.title}
                            href={item.link}
                        >
                            <div className="relative flex rotate-1 items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                <img
                                    src={item.img}
                                    alt="cover"
                                    className="z-10 absolute h-full rounded-xl"
                                />
                            </div>

                            <h1 className="font-bold text-white lg:text-2xl md:text-xl text-base line-clamp-1">
                                {item.title}
                            </h1>
                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {item.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-black/[.2] rounded-full bg-white  lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            <img src={icon} alt="icon5" className="p-2" />
                                        </div>
                                    ))}
                                </div>

                                <a href={item.link} target="_blank" className="flex justify-center items-center">
                                    <p className="flex lg:text-lg font-semibold md:text-xs text-sm text-purple">
                                        Check Live Site
                                    </p>
                                    {/* <FaLocationArrow className="ms-3" color="#CBACF9" /> */}
                                </a>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;