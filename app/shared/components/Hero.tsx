'use client';

import { useState, useEffect, useRef } from 'react';
import { Mail, ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import '../styles/Hero.css';
// import { NavLink } from '@/components/NavLink';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Magnetic cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="hero-modern"
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
      } as React.CSSProperties}
    >
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="gradient-mesh"></div>
        <div className="noise-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        
        {/* Left Column - Text */}
        <div className="hero-text">
          
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <div className="availability-badge">
              <span className="pulse-dot"></span>
              Available for work
            </div>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            <span className="title-line">
              <span className="word" data-word="HI,">HI,</span>
            </span>
            <span className="title-line">
              <span className="word" data-word="I'M">I'M</span>
            </span>
            <span className="title-line accent">
              <span className="word" data-word="SHIWANI">SHIWANI</span>
            </span>
          </h1>

          {/* Rotating Role Tags */}
          <div className="role-tags">
            <div className="role-tag">Developer</div>
            <div className="role-tag">Designer</div>
            <div className="role-tag">Creator</div>
          </div>

          {/* Description */}
          <p className="hero-description">
            I craft digital experiences that blend 
            <span className="highlight"> clean code</span>,
            <span className="highlight"> beautiful design</span>, and
            <span className="highlight"> seamless functionality</span>.
          </p>

          {/* CTA Buttons */}
          {/* <div className="hero-cta">
            <NavLink href="#Contact" className="btn-primary magnetic">
              <span>Let's Talk</span>
              <ArrowRight className="btn-icon" />
            </NavLink>
            
            <NavLink href="#Projects" className="btn-secondary magnetic">
              <span>View Work</span>
            </NavLink>

            <a 
              href="./Shiwani_Soni_resume.pdf" 
              download 
              className="btn-icon-only magnetic"
              aria-label="Download Resume"
            >
              <Download size={20} />
            </a>
          </div> */}

          {/* Social Links */}
          <div className="hero-social">
            <a href="https://github.com/shiwani08" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shiwani-soni-a33b8a21b/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Twitter size={20} />
            </a>
          </div>

        </div>

        {/* Right Column - Visual */}
        <div className="hero-visual">
          
          {/* Glassmorphic Card */}
          <div className="visual-card tilt-card">
            
            {/* Stats Grid */}
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Clients</span>
              </div>
            </div>

            {/* Image/Avatar */}
            <div className="avatar-container">
              <div className="avatar-blob"></div>
              <Image
                src="/profile.jpg" // Replace with your image
                alt="Shiwani"
                width={400}
                height={400}
                className="avatar-image"
                priority
              />
            </div>

            {/* Tech Stack Pills */}
            <div className="tech-pills">
              <span className="pill">React</span>
              <span className="pill">Next.js</span>
              <span className="pill">TypeScript</span>
              <span className="pill">Tailwind</span>
            </div>

          </div>

          {/* Decorative Elements */}
          <div className="deco-circle deco-1"></div>
          <div className="deco-circle deco-2"></div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>

    </section>
  );
}