"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { RevealText } from "@/app/shared/components/animation/Reveal";
import { motion } from "framer-motion";
import Timeline from "./Timeline";

export default function About() {
  const router = useRouter();

 return (
    <section id="About" className="about-section">
      <div className="about-container">
        <motion.h2 
          className="section-title text-#0c3f71"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p 
          className="about-text"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I am a Software Engineer dedicated to building high-performance, 
          scalable web applications. I bridge the gap between complex 
          backend logic and intuitive frontend experiences to create 
          seamless digital solutions. My focus is on writing clean, 
          maintainable code that solves real-world problems effectively.
        </motion.p>
        <Timeline />
      </div>
    </section>
  );
}
