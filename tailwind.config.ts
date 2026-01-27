import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        "background-secondary": "#0a0a0a",
        foreground: "#ffffff",
        primary: "#3ECF8E",
        "primary-dark": "#2aa06a",
        muted: "#a0a0a0",
        "muted-dark": "#666666",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "scan-line": "scan-line 8s linear infinite",
        "grid-flow": "grid-flow 20s linear infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(62, 207, 142, 0.3)",
            opacity: "1",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(62, 207, 142, 0.6)",
            opacity: "0.8",
          },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "grid-flow": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(50px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
