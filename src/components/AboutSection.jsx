"use client"
import Image from "next/image"
import { Button } from "./ui/moving-border"
import { FaArrowRight } from "react-icons/fa"
import mySelf from "@/assets/duplicateme.jpg";
import vectorImg from "@/assets/Vector 8.png";
import { useRouter } from "next/navigation";

function AboutSection() {
    const router  = useRouter()
    const goToAbout = () =>{
        router.push("/about")
    }
  return (
    <section className="pt-10 relative lg:pt-20 px-10 lg:px-36 ">
       <div className="absolute inset-0 bg-grid-white/[0.02]  bg-[size:50px_50px] " />
    <div className="lg:grid  container mx-auto lg:grid-cols-2 h-fit relative">
      <Image
        src={vectorImg}
        alt="Decorative Vector Background"
        className="absolute lg:-left-28 lg:-top-10 xl:bottom-10   md:top-10 sm:bottom-[550px] lg:w-2/5 w-full "
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
          Proficient in React.js, Next.js, , Node.js, Firebase and MongoDB Noman effectively
          integrates front-end and back-end solutions to create seamless
          user experiences.
        </p>
        <div className="my-10 w-full ">
          <Button
            width={"w-48 sm:w-52"}
            borderRadius="1.75rem"
            className={"bg-orange-500 text-white "}
            onClick={goToAbout}
          >
            Discover More About Me <FaArrowRight className="mx-1" />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-end py-10 sm:p-20 xl:p-10 ">
        <Image
          src={mySelf}
          alt="Personal picture"
          className="rounded-xl w-full md:w-1/2 lg:w-full xl:w-10/12 "
          priority={true}
        />
      </div>
    </div>
  </section>

  )
}

export default AboutSection