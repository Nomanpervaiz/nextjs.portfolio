import Header from "@/components/Header"
import mySelf from "@/assets/duplicateme.jpg";
import Contact from "./contact/page"
import Projects from "./projects/page"
import Image from "next/image"
import { Button } from "@headlessui/react";
import vectorImg from "@/assets/Vector 8.png";

function Home() {
  return (
    <>

      <Header />
      <section className="bg-black/[0.89] pt-10 lg:pt-20 px-10 lg:px-36">
        <div className="grid lg:grid-cols-2 h-fit relative">
        <Image
        src={vectorImg}
        alt="Decorative Vector Background"
        className="absolute xl:right-[700px] lg:right-[600px] right-0 xl:bottom-10   md:top-10 sm:bottom-[550px] lg:w-2/5 w-full "
        layout="intrinsic"
        priority={true}
      />
          <div className="text-center  flex flex-col justify-center xl:text-left xl:px-10 ">
            <h2 className="font-bold text-3xl py-4 lg:py-4 lg:text-5xl text-white">
              Let&apos;s get know <br /> about me closer
            </h2>
            <p className="text-gray-100 font-bold text-md md:px-10 lg:px-0 lg:text-base">
              Noman is a full-stack software developer specializing in modern,
              responsive web applications. His portfolio showcases a variety of
              projects, including eCommerce platforms and interactive websites.
              Proficient in React.js, Next.js, and Firebase, Noman effectively
              integrates front-end and back-end solutions to create seamless user
              experiences.
            </p>
            <Button className="py-4 px-6 md:py-2 md:px-2 my-4 xl:mx-0 lg:mx-auto mx-auto rounded-full w-3/4 text-white bg-orange-400">
              Discover More
            </Button>
          </div>
          <div className="flex  items-center justify-center py-10 sm:p-20 xl:p-10 lg:items-end lg:justify-end">
            <Image
              src={mySelf}
              alt="Personal picture"
              className="rounded-xl w-full md:w-1/2 lg:w-full xl:w-3/4"
              layout="intrinsic"
              priority={true}
            />
          </div>
        </div>
      </section>
      <Projects />
      <Contact />

    </>
  )
}

export default Home