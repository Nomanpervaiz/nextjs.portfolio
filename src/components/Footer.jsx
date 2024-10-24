import { PhoneIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <footer className="text-gray-600 bg-black/[0.95] body-font">
            <div className="container mx-auto pt-32">
                <div className="h-32  lg:mx-24 xl:mx-32 mx-10 sm:mx-2 flex flex-col items-center border-b border-gray-400 ">
                    <h2 className="text-orange-400 font-semibold">Get In Touch With Me</h2>
                    <Link href="mailto:nomanpervaiz035@gmail.com" className="text-white underline sm:text-3xl py-2 font-semibold text-md">
                        nomanpervaiz035@gmail.com
                    </Link>
                    <div className="flex ">
                        <PhoneIcon className="text-white sm:text-xs" /> 
                        <span className="px-2">
                            <Link href="mailto:nomanpervaiz035@gmail.com" className="text-white text-1xl font-semibold">
                                +92-3049377779
                            </Link>
                        </span>
                    </div>



                </div>
                <div className="lg:mx-24 xl:mx-32 mx-10 sm:mx-2  border-b border-gray-400"></div>
            </div>
            <div className="container lg:px-36 lg:py-8 py-6  mx-auto flex items-center sm:flex-row flex-col">
                <Link
                    className="text-md xl:text-xl md:text-xl font-black text-white drop-shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:text-gray-200 hover:animate-pulse relative group"
                    href="/"
                >
                    N
                    <span className="text-gray-400 drop-shadow-lg  transition-all duration-500 ease-in-out group-hover:text-gray-300 group-hover:ml-1">
                        o
                    </span>
                    <span className="inline-block drop-shadow-lg transition-transform duration-500 ease-in-out group-hover:rotate-12">
                        m
                    </span>
                    <span className="inline-block drop-shadow-lg transition-transform duration-500 ease-in-out group-hover:-rotate-12">
                        a
                    </span>
                    <span className="inline-block drop-shadow-lg transition-transform duration-500 ease-in-out group-hover:rotate-6">
                        n
                    </span>
                </Link>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © Created by Noman pervaiz | 2024
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <h2 className="text-md text-gray-400 px-4">Follow me on:</h2>

                    <Link
                        href={"https://www.linkedin.com/in/noman-pervaiz-b93aa62b"}
                        className="ml-3 text-gray-500"
                    >
                        <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={0}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            />
                            <circle cx={4} cy={4} r={2} stroke="none" />
                        </svg>
                    </Link>
                    <Link
                        href={"https://github.com/Nomanpervaiz"}
                        className="ml-3 text-gray-500"
                    >
                        <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={0}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="none"
                                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577v-2.232c-3.338.726-4.043-1.614-4.043-1.614-.546-1.385-1.333-1.754-1.333-1.754-1.09-.746.083-.731.083-.731 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.11-.774.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.933 0-1.312.468-2.385 1.237-3.226-.124-.303-.536-1.523.117-3.176 0 0 1.01-.324 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.286-1.555 3.295-1.23 3.295-1.23.656 1.653.244 2.873.12 3.176.772.841 1.236 1.914 1.236 3.226 0 4.61-2.807 5.63-5.479 5.924.43.369.823 1.096.823 2.21v3.282c0 .32.19.694.8.576C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                            />
                        </svg>
                    </Link>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
