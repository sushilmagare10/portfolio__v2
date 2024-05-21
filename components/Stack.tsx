import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

const Stack = () => {

    const words = [
        {
            text: "The",
        },
        {
            text: "awesome",
        },
        {
            text: "Stack",
            className: "text-teal-500",
        },
        {
            text: "That",
        },
        {
            text: "I",
        },
        {
            text: "Use",
            className: "text-purple "
        }
    ];

    return (
        <div className=' h-screen w-full'>
            <TypewriterEffectSmooth words={words} />
            {/* left side */}
            <div></div>
            {/* right side */}
            <div></div>
        </div>
    )
}

export default Stack