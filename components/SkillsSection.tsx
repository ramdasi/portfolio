'use client';

import { skills } from '@/data/content';

export default function SkillsSection() {
  const colorMap = {
    cyan: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    purple: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    amber: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    emerald: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    pink: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
  };

  const headerColor = {
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    amber: 'text-amber-400',
    emerald: 'text-emerald-400',
    pink: 'text-pink-400',
  };

  return (
    <section id="skills" className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          {skills.sectionTitle}
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          {skills.sectionDescription}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.categories.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 bg-[#020014]/60 backdrop-blur-sm border border-white/5 rounded-xl hover-lift transition-all duration-500 hover:border-white/10 hover:shadow-[0_0_30px_rgba(0,217,255,0.05)]"
          >
            <h3 className={`text-xl font-bold mb-4 ${headerColor[cat.color as keyof typeof headerColor]}`}>
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sidx) => (
                <span
                  key={sidx}
                  className={`text-xs px-3 py-1.5 border rounded-full font-medium ${
                    colorMap[cat.color as keyof typeof colorMap]
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
