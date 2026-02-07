"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { RevealText } from "@/app/shared/components/animation/Reveal";
import { motion } from "framer-motion";
import Timeline from "./Timeline";
import Image from "next/image";
import "../../shared/styles/About.css";

export default function About() {
  const router = useRouter();

  return (
    <section id="About" className="about-section">
      <div className="about-container">
        <motion.h2 className="about-title">About Me</motion.h2>

        {/* Wrap text and image here */}
        <div className="about-content-wrapper">
          <motion.p className="about-text">
            I am a Software Engineer dedicated to building high-performance,
            scalable web applications. I bridge the gap between complex backend
            logic and intuitive frontend experiences to create seamless digital
            solutions. My focus is on writing clean, maintainable code that
            solves real-world problems effectively.
          </motion.p>

          <Image
            src="/desk.svg"
            alt="Under Construction"
            width={400}
            height={300}
            className="about-image"
          />
        </div>

        <Timeline />
      </div>
    </section>
  );
}
