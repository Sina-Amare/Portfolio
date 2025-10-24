const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.css",
    "./docs/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0A0A0A", // soft black / graphite
          secondary: "#F9FAFB", // light neutral white
          accent: "#2563EB", // refined blue
          accentSecondary: "#00C6FF", // gradient pairing cyan
          highlight: "#FACC15", // gentle emphasis yellow
          textPrimary: "#111827", // dark gray for content
          textSecondary: "#6B7280", // secondary text
        },
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        display: ["Poppins", ...fontFamily.sans],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
        "2xl/5": "0 25px 50px -12px rgba(0, 0, 0, 0.05)",
        cinematic: "0 20px 40px rgba(37,99,235,0.15)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backgroundImage: {
        "gradient-ambient":
          "radial-gradient(circle at 30% 50%, rgba(37,99,235,0.15), transparent 70%), linear-gradient(to bottom right, #0D1117, #1E293B)",
        "gradient-cyan":
          "radial-gradient(circle at 70% 30%, rgba(0,198,255,0.1), transparent 60%), linear-gradient(to bottom right, #0D1117, #1E293B)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
