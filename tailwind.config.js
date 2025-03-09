/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.ejs", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#0a0a0a",
          900: "#121212",
          800: "#1a1a1a",
          700: "#222222",
          600: "#2a2a2a",
          500: "#333333",
          400: "#444444",
          300: "#555555",
          200: "#666666",
          100: "#777777",
        },
        accent: {
          950: "#662200", // Very dark orange
          900: "#7c2d12", // Dark orange
          800: "#9a3412",
          700: "#c2410c",
          600: "#ea580c",
          500: "#f97316", // Base orange
          400: "#fb923c",
          300: "#fdba74",
          200: "#fed7aa",
          100: "#ffedd5",
        },
        glow: {
          orange: "#ff4500",
          dark: "#2d1006",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        gradient: "gradient 8s linear infinite",
        typing:
          "typing 3.5s steps(40, end), blink-caret .75s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": {
            boxShadow:
              "0 0 5px rgba(249, 115, 22, 0.2), 0 0 20px rgba(249, 115, 22, 0.2)",
          },
          "100%": {
            boxShadow:
              "0 0 10px rgba(249, 115, 22, 0.5), 0 0 40px rgba(249, 115, 22, 0.3)",
          },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "#f97316" },
        },
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.accent.500"), 0 0 20px theme("colors.accent.500")',
        "neon-lg":
          '0 0 10px theme("colors.accent.500"), 0 0 30px theme("colors.accent.500")',
      },
      textShadow: {
        neon: '0 0 5px theme("colors.accent.500"), 0 0 10px theme("colors.accent.500")',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-neon": {
          textShadow: "0 0 5px #f97316, 0 0 10px #f97316",
        },
        ".text-gradient": {
          background: "linear-gradient(90deg, #f97316, #fdba74, #f97316)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          backgroundSize: "200% auto",
          animation: "gradient 8s linear infinite",
        },
        ".bg-gradient-animated": {
          background:
            "linear-gradient(-45deg, #121212, #1a1a1a, #222222, #2a2a2a)",
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
        },
        ".bg-noise": {
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
