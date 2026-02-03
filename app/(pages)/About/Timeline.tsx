"use client";

import React from "react";
import { motion } from "framer-motion";
import "../../shared/styles/Timeline.css";

const journey = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Codeworks",
    date: "Jan 2026 - Present",
    description: "Building scalable web applications and optimizing frontend performance using Next.js and TypeScript.",
    type: "work",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "CodeClouds",
    date: "Aug 2024 - Jan 2026",
    description: "Developed web applications with a focus on user experience and responsive design, utilizing React.js.",
    type: "work",
  },
  {
    id: 3,
    title: "Bachelor of Technology",
    company: "MCKV Institute of Engineering",
    date: "2021 - 2025",
    description: "Specialized in Computer Science. Graduated with honors, focusing on Data Structures and Web Technologies.",
    type: "education",
  },
  {
    id: 4,
    title: "Higher Secondary Education",
    company: "St. Agnes' Convent School",
    date: "2019 - 2021",
    description: "Completed secondary education with a focus on Physics, Chemistry, and Mathematics.",
    type: "education",
  },
];

export default function Timeline() {
  return (
    <div className="timeline-section">
      <h3 className="timeline-main-title">My Journey</h3>
      <div className="ladder-container">
        {/* The Vertical Rail */}
        <div className="ladder-rail"></div>

        {journey.map((item, index) => (
          <motion.div 
            key={item.id}
            className="ladder-step"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="step-content">
              <span className="step-date">{item.date}</span>
              <h4 className="step-title">{item.title}</h4>
              <h5 className="step-location">{item.company}</h5>
              <p className="step-desc">{item.description}</p>
            </div>
            {/* The Rung/Node */}
            <div className="ladder-node"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}