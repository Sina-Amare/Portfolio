const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.css",
    "./docs/**/*.{md,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        'primary-background': '#0D1117',
        'secondary-gradient-start': '#0C162D',
        'secondary-gradient-end': '#0D1E25',
        'accent-cyan': '#00E0D3',
        'accent-magenta': '#D74CF0',
        'accent-purple': '#8B5CF6',
        'highlight-yellow': '#FFCC4D',
        'text-primary': '#FFFFFF',
        'text-secondary': '#C9D1D9',
        'link-blue': '#00C6FF',
        'link-pink': '#FF1493',
        'code-card-background': '#101C2B',
        'glow-accent': 'rgba(0,255,255,0.3)',
      },
      borderRadius: {
        lg: "16px",
        xl: "24px",
        full: '9999px',
      },
      height: {
        18: "72px",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        display: ["Poppins", ...fontFamily.sans],
        mono: ["JetBrains Mono", ...fontFamily.mono],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0.05)",
        "2xl/5": "0 25px 50px -12px rgba(0, 0, 0, 0.05)",
        cinematic: "0 20px 40px rgba(37,99,235,0.15)",
        'glow-accent': '0 0 20px rgba(0,255,255,0.15)',
        'code-card': '0 0 30px rgba(0,255,255,0.12)',
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backgroundImage: {
        "gradient-ambient":
          "radial-gradient(circle at 30% 50%, rgba(37,99,235,0.15), transparent 70%), linear-gradient(to bottom right, #0D1117, #1E293B)",
        "gradient-cyan":
          "radial-gradient(circle at 70% 30%, rgba(0,198,255,0.1), transparent 60%), linear-gradient(to bottom right, #0D1117, #1E293B)",
        "gradient-animated": "linear-gradient(45deg, #ff3ea5, #b040ff, #00ffe0, #ff3ea5)",
        'button-gradient': 'linear-gradient(to right, #FF00CC, #3333FF)',
        'grid-pattern': 'linear-gradient(#121A23 1px, transparent 1px), linear-gradient(90deg, #121A23 1px, transparent 1px)',
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        gradientMove: "gradientMove 15s ease infinite",
        wave: 'wave 1s ease-in-out infinite',
      },
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        wave: {
          '0%': { transform: 'rotate(0)' },
          '50%': { transform: 'rotate(15deg)' },
          '100%': { transform: 'rotate(0)' },
        }
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};