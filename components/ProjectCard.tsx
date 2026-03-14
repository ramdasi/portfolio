'use client';

import { useState } from 'react';
import { icons } from '@/components/Icons';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  metrics: Array<{ label: string; value: string }>;
  tags: string[];
  accentColor: 'cyan' | 'purple' | 'amber' | 'emerald' | 'pink';
  githubUrl?: string;
  liveUrl?: string;
}

const accentMap = {
  cyan: 'from-cyan-400/20 to-blue-500/10',
  purple: 'from-purple-400/20 to-pink-500/10',
  amber: 'from-amber-400/20 to-orange-500/10',
  emerald: 'from-emerald-400/20 to-teal-500/10',
  pink: 'from-pink-400/20 to-rose-500/10',
};

const accentBorder = {
  cyan: 'hover:border-cyan-400/30',
  purple: 'hover:border-purple-400/30',
  amber: 'hover:border-amber-400/30',
  emerald: 'hover:border-emerald-400/30',
  pink: 'hover:border-pink-400/30',
};

const accentGlow = {
  cyan: 'hover:shadow-[0_0_40px_rgba(0,217,255,0.08)]',
  purple: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.08)]',
  amber: 'hover:shadow-[0_0_40px_rgba(251,191,36,0.08)]',
  emerald: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.08)]',
  pink: 'hover:shadow-[0_0_40px_rgba(244,114,182,0.08)]',
};

const accentText = {
  cyan: 'text-cyan-400',
  purple: 'text-purple-400',
  amber: 'text-amber-400',
  emerald: 'text-emerald-400',
  pink: 'text-pink-400',
};

export default function ProjectCard({
  title,
  subtitle,
  description,
  metrics,
  tags,
  accentColor,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative p-6 md:p-8 bg-[#020014]/60 backdrop-blur-sm border border-white/5 rounded-xl transition-all duration-500 hover-lift ${accentBorder[accentColor]} ${accentGlow[accentColor]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Accent gradient background on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accentMap[accentColor]} opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500 pointer-events-none`}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
          <p className={`text-sm font-semibold ${accentText[accentColor]}`}>
            {subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-black/30 rounded-lg border border-white/5">
          {metrics.map((metric, idx) => (
            <div key={idx}>
              <p className={`text-xl md:text-2xl font-bold ${accentText[accentColor]}`}>
                {metric.value}
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className={`text-xs px-3 py-1 bg-white/5 border rounded-full transition-all duration-300 ${
                isHovered ? `${accentText[accentColor]} border-current/20` : 'text-gray-400 border-white/10'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project links */}
        {(githubUrl || liveUrl) && (
          <div className="flex gap-3 mt-6">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} source code on GitHub`}
                className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                {icons.github}
                <span>Source</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo`}
                className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                {icons.external}
                <span>Live Demo</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
