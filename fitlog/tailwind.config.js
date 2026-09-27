/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './context/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0C0E',
        surface: '#151619',
        'surface-hover': '#1C1E22',
        border: '#2A2C30',
        accent: '#CCFF00',
        'accent-ink': '#0B0C0E',
        ink: '#F5F5F0',
        muted: '#9A9CA3',
        faint: '#6B6D73',
      },
      fontFamily: {
        display: ['var(--font-oswald)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
