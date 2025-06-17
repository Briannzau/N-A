/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#D4AF37", // Gold
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F5F5F5", // Light gray
          foreground: "#333333",
        },
        destructive: {
          DEFAULT: "#DC2626", // Red for errors
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F9F9F9",
          foreground: "#666666",
        },
        accent: {
          DEFAULT: "#D4AF37", // Gold
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#333333",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#333333",
        },
        // Official White & Gold Theme - UPDATED WITH BETTER CONTRAST
        "luxury-white": "#FFFFFF",
        "luxury-gold": "#D4AF37",
        "luxury-gold-light": "#E6C547", // Lighter but still readable
        "luxury-gold-dark": "#B8941F", // Darker gold for better contrast
        "luxury-charcoal": "#333333",
        // Secondary accents (for highlights only)
        "emerald-accent": "#046E5E",
        "sapphire-accent": "#1E3A8A",
        "rose-accent": "#BE185D",
        // Legacy mappings - ALL GOLD NOW
        "brand-gold": "#D4AF37",
        "brand-black": "#333333",
        "brand-white": "#FFFFFF",
        "brand-charcoal": "#333333",
        "neon-primary": "#D4AF37",
        "neon-secondary": "#D4AF37",
        "light-bg": "#FFFFFF",
        "light-section": "#FEFEFE",
        "light-text": "#333333",
        "dark-bg": "#FFFFFF",
        "dark-section": "#FEFEFE",
        "dark-text": "#333333",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1400px",
      },
      spacing: {
        gutter: "1.5rem",
        section: "60px",
      },
      fontSize: {
        hero: ["2rem", { lineHeight: "1.1", letterSpacing: "0.5px" }],
        "hero-md": ["3rem", { lineHeight: "1.1", letterSpacing: "0.5px" }],
        "hero-lg": ["4rem", { lineHeight: "1.1", letterSpacing: "0.5px" }],
      },
      animation: {
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
        "luxury-glow": "luxuryGlow 2s ease-in-out infinite alternate",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(212, 175, 55, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        luxuryGlow: {
          "0%": { opacity: 0.8 },
          "100%": { opacity: 1 },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      backgroundImage: {
        "hero-light": "linear-gradient(135deg, #FFFFFF 0%, #FFF9E6 50%, #F5F0D8 100%)",
        "luxury-gradient": "linear-gradient(135deg, #FFFFFF 0%, #FFF8E1 100%)",
        "gold-shimmer": "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent)",
      },
      boxShadow: {
        "luxury-card": "0 2px 8px rgba(212, 175, 55, 0.15)",
        "luxury-hover": "0 4px 16px rgba(212, 175, 55, 0.3)",
        "luxury-glow": "0 0 20px rgba(212, 175, 55, 0.4)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
