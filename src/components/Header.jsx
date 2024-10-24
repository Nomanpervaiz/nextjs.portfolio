import React from "react";
import { Button } from "./ui/button";
import vectorImg from "../assets/Vector 8.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

function Header() {
  return (
    <section className="bg-black/[0.89] relative py-12 lg:py-28 ">
      <Image
        src={vectorImg}
        alt="Decorative Vector Background"
        className="absolute lg:right-60 right-0 top-0 lg:w-2/5 w-full "
        layout="intrinsic"
        priority={true}
      />

      <div className="h-full px-2 lg:px-36 container mx-auto text-white">
        <div className="flex flex-col h-full justify-center items-center">
          <div className="md:text-4xl p-1 text-2xl font-bold">
            I'm
            <span className="px-2">

             <Link
              className="text-md md:text-4xl text-xl font-black text-white drop-shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:text-gray-200 hover:animate-pulse relative group"
              href="/"
              >
             N
              <span className="text-gray-400 drop-shadow-lg font-medium transition-all duration-500 ease-in-out group-hover:text-gray-300 group-hover:ml-1">
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
                </span>
          </div>
          <h1 className="text-3xl md:text-5xl text-center font-bold py-2">
            Full Stack Web Developer
          </h1>
          <h2 className="text-2xl md:text-2xl lg:px-32 text-center py-1">
            I'm Noman, a Full-Stack Web Developer passionate about crafting
            modern, responsive, and seamless websites that help businesses
            thrive in the digital world.
          </h2>

          <Button className="py-4 px-6 md:py-6 md:px-8 my-10 rounded-full  bg-orange-400">
            Explore Work <FaArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Header;
