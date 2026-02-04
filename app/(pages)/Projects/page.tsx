"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax, Mousewheel } from "swiper/modules";
import Image from "next/image";
import projectData from "./ProjectData";
import '../../shared/styles/Projects.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./ExpoSlider.css"; 

export default function Projects() {
  return (
    <section className="projects-section bg-[#020617] py-20">
      <h2 className="section-title text-white mb-10">Featured Projects</h2>
      
      <Swiper
        speed={1000}
        parallax={true}
        mousewheel={true}
        centeredSlides={true}
        slidesPerView={1.2}
        spaceBetween={30}
        loop={true}
        modules={[Navigation, Pagination, Parallax, Mousewheel]}
        className="expo-swiper"
      >
        {projectData.map((project) => (
          <SwiperSlide key={project.id} className="expo-slide">
            {/* Background Image with Parallax Effect */}
            <div 
              className="slide-bg" 
              data-swiper-parallax="20%"
            >
              <Image 
                src={project.img} 
                alt={project.title} 
                fill 
                className="object-cover opacity-60"
              />
            </div>

            {/* Content with Different Parallax Speed */}
            <div className="slide-content">
              <h3 
                className="slide-title" 
                data-swiper-parallax="-300"
              >
                {project.title}
              </h3>
              <p 
                className="slide-desc" 
                data-swiper-parallax="-100"
              >
                {project.desc}
              </p>
              <div data-swiper-parallax="-50">
                <a href={project.github} target="_blank" className="view-project-btn">
                  View Repository
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}