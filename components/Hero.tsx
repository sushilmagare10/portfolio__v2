import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";


const Hero = () => {
    return (
        <section id='home' className="pb-20 pt-36">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>
            <div
                className="h-screen w-full bg-black-100 bg-grid-white/[0.03] 
       absolute top-0 left-0 flex items-center justify-center"
            >
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 font-medium">
                        Dynamic Web Magic with Next.js
                    </p>
                    <TextGenerateEffect
                        words="Designing Dreams into Delightful Experiences"
                        className="text-center text-[40px] md:text-5xl lg:text-7xl leading-none tracking-tighter"
                    />
                    <p className="text-center text-white md:tracking-wider mb-10 text-sm md:text-lg lg:text-2xl">
                        Hi! I&apos;m Sushil, a Next.js Developer based in India.
                    </p>
                    <a href="#about">
                        <MagicButton
                            title="See my work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;