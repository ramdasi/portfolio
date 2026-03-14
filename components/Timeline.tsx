'use client';

import { timeline } from '@/data/content';

export default function Timeline() {
  return (
    <section id="timeline" className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          {timeline.sectionTitle}
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          {timeline.sectionDescription}
        </p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-purple-400/30 to-transparent" />

        <div className="space-y-10 md:space-y-14">
          {timeline.items.map((item, idx) => (
            <div key={idx} className="relative md:ml-20 pl-8 md:pl-0">
              {/* Dot on timeline */}
              <div className="absolute left-0 md:-left-[14px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 shadow-[0_0_10px_rgba(0,217,255,0.5)]" />

              <div className="group">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                  <span className="text-cyan-400 text-sm font-semibold tracking-wide">{item.date}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{item.role}</h3>
                    <p className="text-gray-400">
                      {item.company} &bull; {item.domain}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {item.highlights.map((highlight, hidx) => (
                    <span
                      key={hidx}
                      className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400 rounded-full group-hover:text-cyan-400 group-hover:border-cyan-400/20 transition-all duration-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
