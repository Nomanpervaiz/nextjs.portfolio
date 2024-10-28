'use client'
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-Follow-Pointer";

export default function Pointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    
    <motion.div
      ref={ref}
      className="w-10  h-10 rounded-full fixed pb-2  bg-transparent border-2 text-white font-bold items-center flex justify-center "
      style={{ x, y, zIndex: -10 }}  
      >.</motion.div>
    
    
  )
}
