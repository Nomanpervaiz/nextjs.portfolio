import Image from "next/image";
import mySelf from "@/assets/duplicateme.jpg";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Button } from "@/components/ui/moving-border";
import { FaArrowRight } from "react-icons/fa";
import CvButton from "@/components/CvButton";


function About() {

    const aboutMe = [
        {
          title: "Personal Background",
          name: "Noman Pervaiz",
          quote: "Passionate about creating innovative web solutions that bridge design and functionality."
        },
        {
          title: "Professional Experience",
          name: "Full-Stack Web Developer",
          quote: "With years of experience in both front-end and back-end, I bring ideas to life with seamless user experiences."
        },
        {
          title: "Core Skills",
          name: "React, Next.js, Firebase",
          quote: "Proficient in modern frameworks and libraries, I continuously push the boundaries of web development."
        },
        {
          title: "Career Goals",
          name: "Digital Innovation",
          quote: "Driven to build digital solutions that empower businesses to thrive in the ever-evolving online landscape."
        },
        {
          title: "Hobbies & Interests",
          name: "Coding, Fitness, Traveling",
          quote: "Aside from coding, I enjoy exploring new places and maintaining a balanced lifestyle through fitness."
        }
      ];

      
      

  return (
    <section className="pt-10 pb-10 lg:pt-20 px-10 lg:px-36">
      <div className="container mx-auto">
        <div className="text-white xl:px-10 ">
          <h1 className="text-4xl py-2 font-semibold lg:text-6xl">About Me</h1>
          <p className=" text-gray-300">Litle Brief About Myself</p>
        </div>
        <div className="p-6 xl:mx-10 lg:p-10  border-b border-gray-400"></div>

        <div className="grid pt-10 lg:grid-cols-2 h-fit relative ">
          <div className="text-center sm:text-left  flex flex-col justify-center lg:text-left xl:px-10 ">
            <h2 className="font-bold text-4xl py-4 lg:py-4 lg:text-5xl text-white">
              Let&apos;s get know <br /> about me closer
            </h2>
            <p className="text-gray-100 text-center sm:text-left md:text-left font-bold text-md md:px-0 lg:px-0 lg:text-base">
            Noman is a proficient full-stack software developer with expertise in MongoDB, Express.js, Node.js, React Native, React.js, Next.js, Firebase, and JavaScript. He specializes in developing modern, responsive web and mobile applications, integrating both front-end and back-end solutions to create seamless user experiences. His portfolio includes eCommerce platforms, interactive websites, and mobile apps, showcasing his versatility and technical skills
            </p>
            <div className="mt-5 flex justify-center lg:justify-start">
         <CvButton/>
          </div>
          </div>
          <div className="flex  items-center justify-center py-10 sm:p-20 lg:p-6 lg:items-end  lg:justify-end">
            <Image
              src={mySelf}
              alt="Personal picture"
              className="rounded-xl w-full md:w-1/2 lg:w-3/4 "
              priority={true}
            />
          </div>
        </div>
        <div className="text-center lg:text-left  text-white  xl:px-10">
          <div>
            <InfiniteMovingCards
              items={aboutMe}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
