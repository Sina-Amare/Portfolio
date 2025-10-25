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
        brand: {
          primary: "#f8f6f1", // soft cream (new)
          secondary: "#101820", // deep navy (new)
          accent: "#d6b98c", // warm gold (new)
          accentSecondary: "#ff6f61", // coral (new)
          highlight: "#3fb5a3", // teal (new)
          textPrimary: "#f8f6f1", // soft cream for content (new)
          textSecondary: "#6B7280", // secondary text (updated contrast)
        },
        cream: "#f8f6f1",
        ink: "#101820",
        gold: "#d6b98c",
        teal: "#3fb5a3",
        coral: "#ff6f61",
      },
      borderRadius: {
        lg: "16px",
        xl: "24px",
      },
      height: {
        18: "72px",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        display: ["Poppins", ...fontFamily.sans],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0.05)",
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
        "gradient-animated": "linear-gradient(45deg, #ff3ea5, #b040ff, #00ffe0, #ff3ea5)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        gradientMove: "gradientMove 15s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 10%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
