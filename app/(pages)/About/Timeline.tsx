"use client";

import React from "react";
import { motion } from "framer-motion";
import "../../shared/styles/Timeline.css";
import { journey } from "./Journey";

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
              <h5 className="step-location">{item.company}</h5>
              <span className="step-date">{item.date}</span>
              <h4 className="step-title">{item.title}</h4>
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