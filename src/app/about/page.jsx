"use client";

import Image from "next/image";
import mySelf from "@/assets/duplicateme.jpg";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import CvButton from "@/components/CvButton";
import { motion } from "framer-motion";

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
    <section className="relative min-h-screen bg-gradient-to-b from-background to-background/80 overflow-hidden  px-6 lg:px-36 pb-20 pt-32 lg:pt-48">

      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-0 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white xl:px-10"
        >
          <h1 className="text-4xl py-2 font-bold lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
            About Me
          </h1>
          <p className="text-gray-400">A Little Brief About Myself</p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-6 xl:mx-10 lg:p-10 border-b border-orange-500/20"
        />

        <div className="grid pt-10 lg:grid-cols-2 gap-12 lg:gap-20 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center xl:px-10"
          >
            <h2 className="font-bold text-4xl py-4 lg:py-4 lg:text-5xl text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Let&apos;s get to know <br /> me closer
            </h2>
            <div className="relative">
              <div className="absolute  bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg " />
              <p className="relative  rounded-lg py-2 text-gray-100 font-medium text-md lg:text-base leading-relaxed">
                Noman is a proficient full-stack software developer with expertise in MongoDB, Express.js, Node.js, React Native, React.js, Next.js, Firebase, and JavaScript. He specializes in developing modern, responsive web and mobile applications, integrating both front-end and back-end solutions to create seamless user experiences. His portfolio includes eCommerce platforms, interactive websites, and mobile apps, showcasing his versatility and technical skills.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex justify-center lg:justify-start"
            >
              <CvButton />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center lg:items-center lg:justify-end relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur-2xl opacity-10 transform rotate-6" />
            <div className="relative">
              <div className="absolute bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-20" />
              <Image
                src={mySelf}
                alt="Personal picture"
                className="relative rounded-xl w-full md:w-[400px] lg:w-[450px] transform transition-transform duration-500 hover:scale-105"
                priority={true}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-white xl:px-10"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl blur-3xl opacity-20" />
            <InfiniteMovingCards
              items={aboutMe}
              direction="right"
              speed="slow"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;