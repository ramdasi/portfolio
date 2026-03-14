'use client';

import { useEffect, useState } from 'react';
import { hero } from '@/data/content';
import { icons } from '@/components/Icons';
import ParticleNetwork from '@/components/ParticleNetwork';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020014] via-[#0a0025] to-[#000814]" />

      {/* Particle network */}
      <ParticleNetwork />

      {/* Atmospheric nebula glow - right side */}
      <div className="absolute right-[-15%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[800px] md:h-[800px] lg:w-[900px] lg:h-[900px] pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-cyan-500/[0.07] blur-[120px] animate-pulse-slow" />
        <div className="absolute inset-[10%] rounded-full bg-purple-500/[0.06] blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-[25%] rounded-full bg-blue-500/[0.05] blur-[80px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-[40%] rounded-full bg-pink-500/[0.04] blur-[60px]" />
      </div>

      {/* Content - left aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'} space-y-6`}>
            <p className="text-cyan-400 text-sm md:text-base font-semibold tracking-[0.3em] uppercase">
              {hero.greeting}
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
              {hero.headline.line1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                {hero.headline.line2}
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed font-light">
              {hero.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`${isLoaded ? 'animate-fade-in-delay' : 'opacity-0'} flex flex-col sm:flex-row gap-4 mt-10`}>
            <a
              href={hero.cta.primary.href}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-300 border border-cyan-400/30"
            >
              {hero.cta.primary.label}
            </a>

            <a
              href={hero.cta.secondary.href}
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-gray-600/50 text-white font-semibold rounded-lg hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
            >
              {hero.cta.secondary.label}
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-gray-600/50 text-white font-semibold rounded-lg hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {icons.download}
              Resume
            </a>
          </div>

          {/* Stats */}
          <div className={`${isLoaded ? 'animate-fade-in-delay' : 'opacity-0'} mt-16 flex gap-12 md:gap-16`}>
            {hero.stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-cyan-400 text-3xl md:text-4xl font-bold">{stat.value}</p>
                <p className="text-gray-500 text-xs md:text-sm mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
