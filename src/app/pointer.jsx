"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-Follow-Pointer";

export default function Pointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setCurrentScreen(window.innerWidth);
    };
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);


  return currentScreen > 800 ? (
    <motion.div
      ref={ref}
      className="w-8  h-8 rounded-full fixed pb-2  bg-transparent border-2 text-white font-bold items-center flex justify-center "
      style={{ x, y, zIndex: -10 }}
    >
      .
    </motion.div>
  ) : "";
}
