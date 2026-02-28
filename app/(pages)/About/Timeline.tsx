"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, GraduationCap, Code, Award } from "lucide-react";
import "../../shared/styles/Timeline.css";
import { journey } from "./Journey";

// Icon mapping (optional - add to your journey data)
const iconMap: Record<string, React.ReactNode> = {
  work: <Briefcase size={20} />,
  education: <GraduationCap size={20} />,
  project: <Code size={20} />,
  achievement: <Award size={20} />,
};

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Scroll progress for the timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Detect which card is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    const cards = document.querySelectorAll(".timeline-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section" ref={containerRef}>
      <div className="timeline-header">
        <motion.h2
          className="timeline-main-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Journey
        </motion.h2>
        <motion.p
          className="timeline-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From student to professional — a path of continuous growth
        </motion.p>
      </div>

      <div className="timeline-container">
        {/* Animated Progress Line */}
        <div className="timeline-rail">
          <motion.div 
            className="timeline-progress" 
            style={{ scaleY }}
          />
        </div>

        {/* Timeline Items */}
        <div className="timeline-items">
          {journey.map((item, index) => (
            <motion.div
              key={item.id}
              data-index={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${
                activeIndex === index ? 'active' : ''
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Animated Node */}
              <motion.div
                className="timeline-node"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
              >
                <div className="node-inner">
                  {iconMap[item.type || 'work'] || <Briefcase size={16} />}
                </div>
                <div className="node-pulse"></div>
              </motion.div>

              {/* Card Content */}
              <motion.div
                className="timeline-card"
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
              >
                <div className="card-glow"></div>
                
                <div className="card-header">
                  <div className="card-icon">
                    {iconMap[item.type || 'work'] || <Briefcase size={24} />}
                  </div>
                  <span className="card-date">{item.date}</span>
                </div>

                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <h4 className="card-company">{item.company}</h4>
                  <p className="card-description">{item.description}</p>
                </div>

                {/* Optional: Tags/Skills */}
                {/* {item.tags && (
                  <div className="card-tags">
                    {item.tags.map((tag: string, i: number) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                )} */}

                <div className="card-arrow"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* End Marker */}
        {/* <motion.div
          className="timeline-end"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="end-icon">
            <Award size={24} />
          </div>
          <p className="end-text">Present Day</p>
        </motion.div> */}
      </div>
    </section>
  );
}