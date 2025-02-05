"use client";

import { PhoneIcon, Mail, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import Link from "next/link";
import { motion } from "framer-motion";

function Contact() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background lg:px-36 to-background/80 overflow-hidden pb-20 pt-32 lg:pt-28">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-0 mx-auto px-6 py-1 sm:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          
          <motion.div variants={itemVariants} className="text-center mb-2">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 mb-4 ">
              Let's Connect
            </h1>
         
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'm always open to discussing new opportunities and ideas.
            </p>
          </motion.div>
          <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-6 xl:mx-10 lg:p-10 border-b border-orange-500/20"
        />
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 md:mt-20"
          >
            <ContactCard
              icon={<Mail className="w-6 h-6" />}
              title="Email"
              content="nomanpervaiz035@gmail.com"
              href="mailto:nomanpervaiz035@gmail.com"
              delay={0.1}
            />
            <ContactCard
              icon={<PhoneIcon className="w-6 h-6" />}
              title="Phone"
              content="+92-3049377779"
              href="tel:+923049377779"
              delay={0.2}
            />
            <ContactCard
              icon={<MapPin className="w-6 h-6" />}
              title="Location"
              content="Karachi, Pakistan"
              delay={0.3}
            />
            <ContactCard
              icon={<Linkedin className="w-6 h-6" />}
              title="LinkedIn"
              content="Noman Pervaiz"
              href="https://www.linkedin.com/in/noman-pervaiz-b93aa62b3"
              delay={0.4}
            />
            <ContactCard
              icon={<Github className="w-6 h-6" />}
              title="GitHub"
              content="Nomanpervaiz"
              href="https://github.com/Nomanpervaiz"
              delay={0.5}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, content, href, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r  from-orange-500 to-orange-600 rounded-2xl blur opacity-40 group-hover:opacity-90 transition duration-500" />
      <div className="relative h-full bg-card/80 backdrop-blur-md border border-orange-500/20 rounded-xl p-6 transition-all duration-300">
        {href ? (
          <Link href={href} className="block h-full group">
            <CardContent icon={icon} title={title} content={content} />
          </Link>
        ) : (
          <CardContent icon={icon} title={title} content={content} />
        )}
      </div>
    </motion.div>
  );
}

function CardContent({ icon, title, content }) {
  return (
    <div className="space-y-4">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-500/10 group-hover:bg-gray-900/10 group-hover:text-gray-200 text-orange-400">
        {icon}
      </div>
      <div>
        <h2 className="text-xl font-semibold text-foreground  group-hover:text-gray-100 transition-colors">
          {title}
        </h2>
        <p className="mt-1 text-muted-foreground group-hover:text-gray-200">
          {content}
        </p>
      </div>

      <div className="absolute bottom-6 right-6 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <ExternalLink className="w-5 h-5 " />
      </div>
    </div>
  );
}

export default Contact;