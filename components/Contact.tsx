import { FaLocationArrow } from "react-icons/fa6";

import emailjs from "@emailjs/browser";
import MagicButton from "./MagicButton";
import { FormEvent, useRef, useState } from "react";

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        if (form.current) {
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_SERVICE_ID as string,
                    process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
                    form.current, {
                    publicKey: process.env.NEXT_PUBLIC_PUBLIC_ID as string,
                }
                )
                .then(
                    () => {
                        setSuccess(true);
                        form.current?.reset();
                    },
                    () => {
                        setError(true);
                        console.log(error)
                    }
                );
        } else {
            setError(true);
        }
    };
    return (
        <section className=" relative w-full pt-20 pb-10 z-50" id="contact">
            <div className="flex flex-col text-white items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your</span> digital
                    presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
            </div>
            <form
                ref={form}
                onSubmit={sendEmail}
                className='mt-10 flex flex-col lg:px-44 gap-3 '
            >
                <input
                    name='user_email'
                    type='email'
                    placeholder='Your Email'
                    required
                    maxLength={500}
                    className='h-14 rounded-lg border focus:outline-none border-black-300 px-4 bg-black-200 text-white-100' />
                <textarea
                    name='user_message'
                    placeholder='Your Message...'
                    required
                    maxLength={5000}
                    className='h-52 rounded-lg border focus:outline-none border-black-300 px-4 pt-6 bg-black-200 text-white-100' />
                <div className=" w-full cursor-pointer">

                    <MagicButton
                        title="Send Mail"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </div>

                {success && (
                    <span className="text-green-600 font-semibold">
                        Your message has been sent successfully!
                    </span>
                )}
                {error && (
                    <span className="text-red-600 font-semibold">
                        Something went wrong!
                    </span>
                )}
            </form>
        </section>
    );
};

export default Contact;