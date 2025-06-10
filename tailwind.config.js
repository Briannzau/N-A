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
        neon: {
          primary: '#00FFDD',
          secondary: '#FF4EAA',
        },
        light: {
          bg: '#FFFFFF',
          section: '#F5F5F5',
          text: '#000000',
        },
        dark: {
          bg: '#0A0A0A',
          section: '#1A1A1A',
          text: '#FFFFFF',
        },
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        gutter: '20px',
        section: '60px',
        'section-mobile': '40px',
      },
      fontSize: {
        'hero': ['3rem', { lineHeight: '1.1' }],
        'hero-md': ['4rem', { lineHeight: '1.1' }],
        'hero-lg': ['5rem', { lineHeight: '1.1' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 255, 221, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 255, 221, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(135deg, #f5f5f5 0%, #e0f7fa 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1a1a1a 0%, #2d1b69 100%)',
        'hero-light': 'linear-gradient(135deg, #f8f9fa 0%, #e0f7fa 50%, #b2dfdb 100%)',
        'hero-dark': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      },
    },
  },
  plugins: [],
}