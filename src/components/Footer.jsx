import { PhoneIcon, Mail, Github, Linkedin } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="relative px-5 sm:px-10 lg:px-36 bg-black text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Contact Section */}
        <div className="py-20">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-orange-400 font-bold text-2xl">Get In Touch</h2>
            <a
              href="mailto:nomanpervaiz035@gmail.com"
              className="group block"
            >
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-orange-400" />
                <span className="text-2xl sm:text-3xl font-medium text-white/90 hover:text-orange-400 transition-colors duration-300">
                  nomanpervaiz035@gmail.com
                </span>
              </div>
            </a>
            <div className="flex items-center justify-center space-x-3">
              <PhoneIcon className="w-5 h-5 text-orange-400" />
              <a
                href="tel:+923049377779"
                className="text-xl font-medium text-white/90 hover:text-orange-400 transition-colors duration-300"
              >
                +92-304-937-7779
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a
              href="/"
              className="group text-3xl font-black tracking-tighter hover:text-orange-400 transition-colors duration-300"
            >
              <span className="inline-block transition-transform duration-300 group-hover:scale-110">N</span>
              <span className="inline-block transition-transform duration-300 group-hover:-rotate-12">o</span>
              <span className="inline-block transition-transform duration-300 group-hover:rotate-12">m</span>
              <span className="inline-block transition-transform duration-300 group-hover:-rotate-12">a</span>
              <span className="inline-block transition-transform duration-300 group-hover:rotate-12">n</span>
            </a>

            {/* Copyright */}
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Created by Noman Pervaiz
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-sm text-white/60">Follow me on:</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/noman-pervaiz-b93aa62b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-orange-400 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Nomanpervaiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-orange-400 transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-orange-400/10 blur-[100px] rounded-full"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-orange-400/10 blur-[100px] rounded-full"></div>
    </footer>
  );
}

export default Footer;