"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import "../../shared/styles/Skills.css";

const skills = [
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    color: "#f89820",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776ab",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "#ffffff",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61dafb",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#f05032",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "#ffffff",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#e34f26",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572b6",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#f7df1e",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178c6",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06b6d4",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "#47a248",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.92,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="skills-section">
      {/* Background grid */}
      <div className="skills-bg-grid" />

      {/* Ambient glow */}
      <div className="skills-bg-glow" />

      <div ref={ref} className="skills-container">
        {/* Header */}
        <motion.div
          // variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="skills-header"
        >
          <p className="skills-eyebrow">Arsenal</p>
          <h2 className="skills-title">
            Tech Stack
            <span className="skills-title-dot" />
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="skills-grid"
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </motion.div>

        {/* Footer label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="skills-footer-label"
        >
          {skills.length} technologies · always growing
        </motion.p>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: (typeof skills)[0] }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      // variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="skill-card"
      animate={{
        borderColor: hovered ? `${skill.color}55` : "rgba(255,255,255,0.06)",
        backgroundColor: hovered
          ? `${skill.color}09`
          : "rgba(255,255,255,0.02)",
        y: hovered ? -4 : 0,
        scale: hovered ? 1.03 : 1,
        boxShadow: hovered
          ? `0 0 24px ${skill.color}25, 0 8px 32px rgba(0,0,0,0.4)`
          : "0 0 0px transparent",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Corner accent */}
      <motion.div
        className="skill-card-corner"
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.2 }}
        style={{
          background: `radial-gradient(circle at top right, ${skill.color}30, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <motion.div
        animate={{
          filter: hovered
            ? `drop-shadow(0 0 10px ${skill.color}88)`
            : "drop-shadow(0 0 0px transparent)",
          rotate: hovered ? [0, -5, 5, 0] : 0,
        }}
        transition={{
          filter: { duration: 0.2 },
          rotate: { duration: 0.4, ease: "easeInOut" },
        }}
      >
        <Image
          src={skill.icon}
          alt={skill.name}
          width={44}
          height={44}
          className="skill-icon"
        />
      </motion.div>

      {/* Name */}
      <motion.span
        className="skill-name"
        animate={{ color: hovered ? "#f1f5f9" : "#64748b" }}
        transition={{ duration: 0.2 }}
      >
        {skill.name}
      </motion.span>
    </motion.div>
  );
}

export default Skills;