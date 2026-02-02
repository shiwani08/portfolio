"use client"; // Required for Framer Motion

import { Mail } from "lucide-react";
import Image from "next/image";
import { RevealText } from "./animation/Reveal";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="hero">
        <div className="diagonal-hero-bg">
          <div className="stars">
            <div className="small"></div>
            <div className="medium"></div>
            <div className="big"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              {/* ANIMATED TEXT HERE */}
              <RevealText>Hi, I’m Shiwani</RevealText>
            </h1>

            <p className="text-lg text-white/80 max-w-xl">
              {/* ADD DELAY SO IT STARTS AFTER THE TITLE */}
              <RevealText delay={0.8}>Well, I just </RevealText>
              <span className="code-for-fun">
                <RevealText delay={1.4}>Code For Fun!</RevealText>
              </span>
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            {/* Space for Image */}
          </div>
        </div>
      </div>
    </section>
  );
}
