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
          accentSecondary: "#38BDF8", // gradient pairing blue
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
        soft: "0 4px 20px rgba(0,0,0.05)",
        "2xl/5": "0 25px 50px -12px rgba(0, 0, 0, 0.05)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backgroundImage: {
        "gradient-ambient":
          "radial-gradient(circle at 50% 20%, rgba(56,189,248,0.15), transparent 60%), linear-gradient(to bottom right, #F9FAFB, #E5E7EB)",
      },
    },
  },
  plugins: [],
};
