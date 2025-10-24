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
          primary: "#2563EB", // modern blue
          accent: "#06B6D4", // cyan accent
          dark: "#0F172A", // near-black navy
          light: "#F8FAFC", // soft white
        },
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        display: ["Poppins", ...fontFamily.sans],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0.05)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
