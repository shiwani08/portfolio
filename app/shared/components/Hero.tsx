"use client";

import { Mail, Download } from "lucide-react"; 
import Image from "next/image";
import { RevealText } from "./animation/Reveal";
import "../../shared/styles/Navbar.css";
import "../styles/Navbar.css"; 
export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="hero">
        <div className="hero-bg-rect"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center md:text-left">
            <h1 className="hero-title-responsive">
              <RevealText>Hi, I’m Shiwani</RevealText>
            </h1>

            <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto md:mx-0">
              <RevealText delay={0.8}>Well, I just </RevealText>
              <span className="code-for-fun">
                <RevealText delay={1.4}>Code For Fun!</RevealText>
              </span>
            </p>

            {/* Resume Button Container */}
            <div className="flex justify-center md:justify-end">
              <a 
                href="./Shiwani_Soni_resume.pdf" 
                download="Shiwani_Resume.pdf" 
                className="resume-btn"
              >
                <span>Download Resume</span>
                <Download size={20} />
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
             {/* Space for Image */}
          </div>
        </div>
      </div>
    </section>
  );
}