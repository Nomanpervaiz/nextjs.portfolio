"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FaArrowUp } from "react-icons/fa";

function ScrollHeight() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const updateScrollMetrics = () => {
      setScrollTop(document.documentElement.scrollTop);
    };

    updateScrollMetrics(); // Get initial values
    window.addEventListener("scroll", updateScrollMetrics); // Update on scroll

    return () => {
      window.removeEventListener("scroll", updateScrollMetrics);
    };
  }, []);

const scrollToTop = () =>{
    window.scrollTo({
      top : 0,
      behavior : "smooth"
    })
}

  return (
    <div>
      <Button
        className={` hover:bg-black/[0.66] shadow-2xl bg-orange-500 text-white fixed h-10 w-10 z-50 sm:right-10 bottom-10 right-5 sm:bottom-20 rounded-full transition-opacity duration-300 ease-in-out ${
          scrollTop > 350 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={scrollToTop}
      >
        <FaArrowUp/>
      </Button>
    </div>
  );
}

export default ScrollHeight;
