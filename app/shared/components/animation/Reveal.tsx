"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export const RevealText = ({ children, className, delay = 0 }: RevealProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, 
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as never },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block" // Crucial for transforms
        >
          {char === " " ? "\u00A0" : char} 
        </motion.span>
      ))}
    </motion.span>
  );
};