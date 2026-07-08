/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Switzer", "ui-sans-serif", "system-ui", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["Martian Mono", "ui-monospace", "SF Mono", "Menlo", "monospace"],
      },
      colors: {
        paper: "oklch(0.981 0.003 240 / <alpha-value>)",
        "paper-2": "oklch(0.958 0.005 240 / <alpha-value>)",
        line: "oklch(0.9 0.008 240 / <alpha-value>)",
        "line-strong": "oklch(0.82 0.01 240 / <alpha-value>)",
        ink: "oklch(0.24 0.02 258 / <alpha-value>)",
        "ink-2": "oklch(0.44 0.02 258 / <alpha-value>)",
        "ink-3": "oklch(0.58 0.02 258 / <alpha-value>)",
        abyss: "oklch(0.17 0.026 256 / <alpha-value>)",
        "abyss-2": "oklch(0.22 0.03 256 / <alpha-value>)",
        "abyss-line": "oklch(0.34 0.03 256 / <alpha-value>)",
        "on-abyss": "oklch(0.94 0.006 240 / <alpha-value>)",
        "on-abyss-mut": "oklch(0.68 0.02 250 / <alpha-value>)",
        accent: "oklch(0.64 0.21 30 / <alpha-value>)",
        "accent-strong": "oklch(0.53 0.2 30 / <alpha-value>)",
        "accent-ink": "oklch(0.36 0.15 30 / <alpha-value>)",
        "c-lo": "oklch(0.6 0.11 232 / <alpha-value>)",
        "c-mid": "oklch(0.62 0.19 300 / <alpha-value>)",
        "c-hi": "oklch(0.64 0.22 18 / <alpha-value>)",
      },
      fontSize: {
        display: ["clamp(2.75rem, 1.5rem + 6.2vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-sm": ["clamp(2rem, 1.1rem + 4vw, 3.75rem)", { lineHeight: "1", letterSpacing: "-0.025em" }],
        title: ["clamp(1.6rem, 1.1rem + 2.2vw, 2.6rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        mono: "0.02em",
      },
      zIndex: {
        base: "0",
        raised: "10",
        sticky: "100",
        nav: "200",
        overlay: "300",
        modal: "400",
        toast: "500",
      },
      maxWidth: {
        prose: "68ch",
        content: "1200px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    },
  },
  plugins: [],
};
