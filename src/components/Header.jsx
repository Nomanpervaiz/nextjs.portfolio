"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Spotlight } from "@/components/ui/SpotLight";
import { Button } from "@/components/ui/moving-border";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

function Header() {
  const router = useRouter();
  const goToContact = () => {
    router.push("/contact");
  };

  const letterVariants = {
    hover: { y: -5, transition: { duration: 0.2 } },
  };

  return (
    <section className="relative min-h-[400px] bg-gradient-to-b from-background to-background/80 overflow-hidden antialiased pb-20 pt-32 lg:pt-48">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] " />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="h-full px-6 lg:px-36 relative container mx-auto text-white">
        <Spotlight
          className="lg:-top-40 lg:right-0 w-full -top-24"
          fill="white"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col h-full justify-center items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:text-4xl lg:text-5xl p-1 text-3xl font-bold"
          >
            I&apos;m
            <span className="px-2">
              <span className="text-md md:text-4xl lg:text-5xl text-1xl font-black text-white drop-shadow-lg relative group inline-flex">
                <motion.span
                  whileHover="hover"
                  variants={letterVariants}
                  className="transition-colors duration-300 hover:text-orange-400"
                >
                  N
                </motion.span>
                <motion.span
                  whileHover="hover"
                  variants={letterVariants}
                  className="text-orange-400 drop-shadow-lg font-medium transition-all duration-300 group-hover:text-white"
                >
                  o
                </motion.span>
                <motion.span
                  whileHover="hover"
                  variants={letterVariants}
                  className="transition-colors duration-300 hover:text-orange-400"
                >
                  m
                </motion.span>
                <motion.span
                  whileHover="hover"
                  variants={letterVariants}
                  className="transition-colors duration-300 hover:text-orange-400"
                >
                  a
                </motion.span>
                <motion.span
                  whileHover="hover"
                  variants={letterVariants}
                  className="transition-colors duration-300 hover:text-orange-400"
                >
                  n
                </motion.span>
              </span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl sm:text-4xl md:text-5xl  text-center font-bold py-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          >
            Full Stack Web Developer
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl md:text-1xl lg:px-32 text-center py-1 text-gray-300 max-w-4xl"
          >
            A Full-Stack Web Developer committed to creating innovative,
            dynamic, and responsive websites. I develop digital solutions that
            improve user experiences, increase engagement, and enable
            organizations to succeed online.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="my-10"
          >
            <Button
              borderRadius="1.75rem"
              className="bg-orange-500 text-white hover:bg-orange-500 transition-colors duration-300"
              onClick={goToContact}
            >
              Contact me
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaArrowRight className="ml-2" />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Header;
