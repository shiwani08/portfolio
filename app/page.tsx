import Image from "next/image";
import { Hero } from "./shared/components/Hero";
import About from "./(pages)/About/page";
import Skills from "./(pages)/Skills/page";
import Projects from "./(pages)/Projects/page";
import Contact from "./(pages)/Contact/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <div id="About">
        <About />
      </div>
      <div id="Skills">
        <Skills />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}
