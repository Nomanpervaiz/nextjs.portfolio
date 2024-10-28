"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";


function Header() {
  return (
    <section className=" antialiased py-12 lg:py-28   ">
      <div
        className="h-full  px-6 lg:px-36 relative container mx-auto text-white"
      >
        <Spotlight
          className="lg:-top-40 lg:right-0  md:-top-52 md:-right-72 -top-40 "
          fill="white"
        />

        <div className="flex flex-col h-full justify-center items-center">
          <div
           className="md:text-4xl lg:text-5xl p-1 text-2xl font-bold">
            I&apos;m
            <span className="px-2">
              <span
                className="text-md md:text-4xl lg:text-5xl text-1xl font-black text-white drop-shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:text-white relative group"
                
              >
                N
                <span className="text-orange-400 drop-shadow-lg font-medium transition-all duration-500 ease-in-out group-hover:text-gray-400 group-hover:ml-1">
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
              </span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-center font-bold py-2">
            Full Stack Web Developer
          </h1>
          <h2 className="text-2xl md:text-2xl lg:px-32 text-center py-1">
            I&apos;m Noman, a Full-Stack Web Developer passionate about crafting
            modern, responsive, and seamless websites that help businesses
            thrive in the digital world.
          </h2>

          <div className="my-10">
            <Button
              borderRadius="1.75rem"
              className={"bg-orange-400 text-white  "}
            >
              Explore Work <FaArrowRight className="mx-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
