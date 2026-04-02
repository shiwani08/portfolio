"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Timeline from "./Timeline";
import Image from "next/image";
import "../../shared/styles/About.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const lineVariant = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: 40, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="About" className="about-section" ref={ref}>
      {/* Noise texture overlay */}
      <div className="about-noise" aria-hidden="true" />

      {/* Ambient background glow */}
      <div className="about-glow" aria-hidden="true" />

      <div className="about-container">

        {/* Left accent line */}
        <motion.div
          className="about-accent-line"
          // variants={lineVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          aria-hidden="true"
        />

        {/* Top meta row */}
        <motion.div
          className="about-meta-row"
          // variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="about-eyebrow">About</span>
          <span className="about-status">
            <span className="about-status-dot" />
            Available for work
          </span>
        </motion.div>

        {/* Big decorative number */}
        {/* <motion.span
          className="about-deco-number"
          // variants={fadeUp}
          custom={0.05}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          aria-hidden="true"
        >
          01
        </motion.span> */}

        {/* Title */}
        <motion.h2
          className="about-title"
          // variants={fadeUp}
          custom={0.1}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          About <em>Me</em>
        </motion.h2>

        {/* Content: text + image */}
        <div className="about-content-wrapper">
          <motion.div
            className="about-text-block"
            // variants={fadeUp}
            custom={0.2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="about-text">
              I am a{" "}
              <strong>Software Engineer</strong> dedicated to building
              high-performance, scalable web applications. I bridge the gap
              between complex backend logic and intuitive frontend experiences
              to create seamless digital solutions.
            </p>
            <p className="about-text about-text--secondary">
              My focus is on writing clean, maintainable code that solves
              real-world problems effectively — turning ideas into products
              people actually love using.
            </p>

            {/* Stat pills */}
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-value">2+</span>
                <span className="about-stat-label">Years building</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-value">15+</span>
                <span className="about-stat-label">Projects shipped</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-value">∞</span>
                <span className="about-stat-label">Problems solved</span>
              </div>
            </div>
          </motion.div>

          {/* Image with geometric clip */}
          <motion.div
            className="about-image-wrapper"
            // variants={imageVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="about-image-frame">
              <Image
                src="/desk.svg"
                alt="Developer at desk"
                width={420}
                height={340}
                className="about-image"
              />
              {/* Corner accents */}
              <span className="about-image-corner about-image-corner--tl" aria-hidden="true" />
              <span className="about-image-corner about-image-corner--br" aria-hidden="true" />
            </div>

            {/* Floating tag */}
            <motion.div
              className="about-floating-tag"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            >
              <span className="about-floating-tag-icon">⚡</span>
              Full-Stack Dev
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="about-divider"
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          aria-hidden="true"
        />

        {/* Timeline */}
        <motion.div
          // variants={fadeUp}
          custom={0.5}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Timeline />
        </motion.div>

      </div>
    </section>
  );
}