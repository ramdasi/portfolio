'use client';

import { contactSection, contactLinks, siteConfig, contact } from '@/data/content';
import { icons } from '@/components/Icons';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[500px] flex items-center justify-center px-6 md:px-12 py-20"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-400/5 via-purple-400/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-12">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            {contactSection.headline.line1}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              {contactSection.headline.line2}
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            {contactSection.description}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {contactLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
              aria-label={link.label}
              className="p-5 bg-[#020014]/60 backdrop-blur-sm border border-white/5 rounded-xl hover:border-cyan-400/20 hover:shadow-[0_0_25px_rgba(0,217,255,0.08)] transition-all duration-500 hover-lift group flex flex-col items-center"
            >
              <div className="text-gray-400 mb-3 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300">
                {icons[link.iconKey]}
              </div>
              <p className="text-sm font-semibold text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                {link.label}
              </p>
            </a>
          ))}
        </div>

        {/* Email CTA */}
        <a
          href={`mailto:${contact.email}`}
          className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-300"
        >
          {contactSection.ctaLabel}
        </a>

        {/* Footer */}
        <div className="pt-12">
          <p className="text-gray-500 text-sm">
            {siteConfig.name} &bull; {siteConfig.location} &bull; {siteConfig.availability}
          </p>
          <p className="text-gray-600 text-xs mt-4">
            {siteConfig.copyright}
          </p>
        </div>
      </div>
    </section>
  );
}
