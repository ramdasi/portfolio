/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        space: ['var(--font-space-grotesk)'],
      },
      colors: {
        cyan: {
          50: '#f0f9fa',
          100: '#e0f2f7',
          200: '#b3dce6',
          300: '#80c5d5',
          400: '#00d9ff',
          500: '#00a8cc',
          600: '#0082a3',
          700: '#005f7a',
          800: '#003d52',
          900: '#001b2a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
