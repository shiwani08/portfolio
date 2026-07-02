"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax, Mousewheel } from "swiper/modules";
import Image from "next/image";
import projectData from "./ProjectData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../shared/styles/Projects.css";

export default function Projects() {
  return (
    <section className="projects-section">
      {/* ── Header ── */}
      <div className="projects-header">
        <h2 className="section-title">
          Featured 
          <span> Projects</span>
        </h2>
        <p className="section-label">Selected work / {new Date().getFullYear()}</p>
      </div>

      {/* ── Swiper ── */}
      <Swiper
        speed={900}
        parallax={true}
        mousewheel={{ forceToAxis: true }}
        centeredSlides={true}
        slidesPerView={1.15}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          1024: { slidesPerView: 1.35 },
        }}
        spaceBetween={24}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Parallax, Mousewheel]}
        className="expo-swiper"
      >
        {projectData.map((project, i) => (
          <SwiperSlide key={project.id}>
            <div className="expo-slide">
              {/* ── Decorative index number ── */}
              <span className="slide-index">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* ── Background image with parallax ── */}
              <div className="slide-bg" data-swiper-parallax="18%">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </div>

              {/* ── Content ── */}
              <div className="slide-content">
                {/* Category label */}
                {/* {project.category && (
                  <span className="slide-category" data-swiper-parallax="-80">
                    {project.category}
                  </span>
                )} */}

                {/* Title */}
                <h3 className="slide-title" data-swiper-parallax="-280">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="slide-desc" data-swiper-parallax="-160">
                  {project.desc}
                </p>

                {/* Skills */}
                <div className="slide-skills" data-swiper-parallax="-120">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="slide-actions" data-swiper-parallax="-60">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-project-btn"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}