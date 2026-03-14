'use client';

import { useState } from 'react';
import { sidebarContacts, siteConfig } from '@/data/content';
import { icons } from '@/components/Icons';

export default function ContactSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Left Sidebar - Hidden on mobile, visible on desktop */}
      <div className="hidden md:fixed md:left-8 md:top-1/2 md:transform md:-translate-y-1/2 md:z-40 md:flex md:flex-col md:gap-6">
        

        {/* Vertical line */}
        <div className="w-px h-12 bg-gradient-to-b from-cyan-400/40 to-purple-400/20 mx-auto" />

        {/* Contact buttons */}
        <div className="flex flex-col gap-4">
          {sidebarContacts.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? undefined : '_blank'}
              rel={item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
              aria-label={item.label}
              className={`w-11 h-11 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 transition-all duration-300 hover-lift text-gray-400 ${item.color}`}
            >
              {icons[item.iconKey]}
            </a>
          ))}
        </div>

        {/* Bottom line */}
        <div className="w-px h-12 bg-gradient-to-b from-purple-400/20 to-transparent mx-auto" />
      </div>

      {/* Mobile floating button */}
      <div className="md:hidden fixed bottom-8 right-8 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all hover-lift"
          aria-label="Toggle contact menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          )}
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 flex flex-col gap-2 bg-[#020014]/95 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            {sidebarContacts.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                aria-label={item.label}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition-all text-sm text-gray-400 hover:text-cyan-400"
              >
                {icons[item.iconKey]}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
