import { Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient + Stars */}
      <div className="hero">
        <div className="diagonal-hero-bg">
          <div className="stars">
            <div className="small"></div>
            <div className="medium"></div>
            <div className="big"></div>
          </div>
        </div>
      </div>

      {/* Content on top of gradient */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Hi, I’m Shiwani
          </h1>

          <p className="text-lg text-white/80 max-w-xl">
            Well, I just <span className="code-for-fun">Code For Fun!</span>
          </p>
        </div>

        {/* Right: Optional Image or empty space */}
        <div className="flex justify-center md:justify-end">
          {/* You can place an image or leave empty */}
        </div>
      </div>
    </section>
  );
}
