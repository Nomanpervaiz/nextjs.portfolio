"use client";

import { Spotlight } from "@/components/ui/SpotLight";
import MapCard from "@/components/MapCard";
import { motion } from "framer-motion";

function Projects() {
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
            My Works
          </h1>
          <p className="text-gray-400">Showcase of My Projects</p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-6 xl:mx-10 mb-20 lg:p-10 border-b border-orange-500/20"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl blur-3xl opacity-20" />
          
          <div className="relative lg:grid lg:grid-cols-2 gap-6">
           
              <MapCard />
          </div>
        </motion.div>
      </div>

      
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
    </section>
  );
}

export default Projects;