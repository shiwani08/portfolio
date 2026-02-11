"use client";

import { Mail } from "lucide-react";
import Image from "next/image";
import { RevealText } from "./animation/Reveal";
import "../../shared/styles/Navbar.css";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="hero">
        {/* Changed diagonal-hero-bg to hero-bg-rect */}
        <div className="hero-bg-rect">
          {/* <div className="stars">
            <div className="small"></div>
            <div className="medium"></div>
            <div className="big"></div>
          </div> */}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            {/* Adjusted mobile text size to 3xl for better fit */}
            <h1 className="hero-title-responsive">
              <RevealText >Hi, I’m Shiwani</RevealText>
            </h1>

            <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto md:mx-0">
              <RevealText delay={0.8}>Well, I just </RevealText>
              <span className="code-for-fun">
                <RevealText delay={1.4}>Code For Fun!</RevealText>
              </span>
            </p>
          </div>

          {/* This container will now stack below on mobile */}
          <div className="flex justify-center md:justify-end">
            {/* Space for Image - it won't be crushed now */}
          </div>
        </div>
      </div>
    </section>
  );
}