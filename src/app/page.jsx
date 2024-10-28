"use client";
import Header from "@/components/Header";
import mySelf from "@/assets/duplicateme.jpg";
import Image from "next/image";
import vectorImg from "@/assets/Vector 8.png";
import { Button } from "@/components/ui/moving-border";
import { FaArrowRight } from "react-icons/fa";
import { ThreeDCardDemo } from "@/components/3dCardEffect";
import { myWork } from "@/utility/myWork";
import MapCard from "@/components/MapCard";

function Home() {

  return (
    <>
      <Header />
      <section className="pt-10 lg:pt-20 px-10 lg:px-36">
        <div className="lg:grid container mx-auto lg:grid-cols-2 h-fit relative">
          <Image
            src={vectorImg}
            alt="Decorative Vector Background"
            className="absolute lg:-left-28 lg:-top-10 xl:bottom-10   md:top-10 sm:bottom-[550px] lg:w-2/5 w-full "
            layout="intrinsic"
            priority={true}
          />
          <div className="text-center  flex flex-col justify-center  xl:text-left xl:px-10 ">
            <h2 className="font-bold text-3xl sm:text-4xl py-4 lg:py-4 lg:text-5xl text-white">
              Let&apos;s get know <br /> about me closer
            </h2>
            <p className="text-gray-100 font-bold text-md md:px-10 lg:px-0 lg:text-base">
              Noman is a full-stack software developer specializing in modern,
              responsive web applications. His portfolio showcases a variety of
              projects, including eCommerce platforms and interactive websites.
              Proficient in React.js, Next.js, and Firebase, Noman effectively
              integrates front-end and back-end solutions to create seamless
              user experiences.
            </p>
            <div className="my-10 w-full ">
              <Button
                width={"w-48 sm:w-52"}
                borderRadius="1.75rem"
                className={"bg-orange-400 text-white "}
              >
                Discover More About Me <FaArrowRight className="mx-1" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end py-10 sm:p-20 xl:p-10 ">
            <Image
              src={mySelf}
              alt="Personal picture"
              className="rounded-xl w-full md:w-1/2 lg:w-full xl:w-3/4 "
              layout="intrinsic"
              priority={true}
            />
          </div>
        </div>
      </section>

      <section className="pt-10 pb-10 lg:pt-20 px-5 sm:px-10 lg:px-36">
        <div className="container mx-auto relative">
          <div className="text-white p-10 text-center">
            <h2 className="text-4xl py-2  font-semibold lg:text-6xl">
              My Projects Highlight
            </h2>
          </div>

          <div className="lg:grid  lg:grid-cols-2 ">
            
                <MapCard limit={4}/>
            </div>

          <div className="flex justify-center my-10">
            <Button
            
              borderRadius="1.75rem"
              className={"bg-orange-400 text-white  "}
            >
              Explore More <FaArrowRight className="mx-1" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
