/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        asparagus: {
          DEFAULT: "#7E8D4E",
          50: "#C8D1AB",
          100: "#C0CAA0",
          200: "#B1BE89",
          300: "#A2B172",
          400: "#93A45B",
          500: "#7E8D4E",
          600: "#646F3E",
          700: "#49522D",
          800: "#2F341D",
          900: "#14170D",
        },
      },
    },
  },
  plugins: [],
};
