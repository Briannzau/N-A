/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'neon-primary': '#00FFDD',
        'neon-secondary': '#FF4EAA',
        'light-bg': '#FFFFFF',
        'light-section': '#F5F5F5',
        'light-text': '#000000',
        'dark-bg': '#0A0A0A',
        'dark-section': '#1A1A1A',
        'dark-text': '#FFFFFF',
      },
      maxWidth: {
        'content': '1200px',
      },
      spacing: {
        'gutter': '20px',
        'section': '60px',
      },
      fontSize: {
        'hero': ['2rem', { lineHeight: '1.1' }],
        'hero-md': ['3rem', { lineHeight: '1.1' }],
        'hero-lg': ['4rem', { lineHeight: '1.1' }],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 255, 221, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 255, 221, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'hero-light': 'linear-gradient(135deg, #f8f9fa 0%, #e0f7fa 50%, #b2dfdb 100%)',
        'hero-dark': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      },
    },
  },
  plugins: [],
}