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
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#06b6d4", // Cyan 500
                    foreground: "#0f172a", // Slate 900
                },
                secondary: {
                    DEFAULT: "#334155", // Slate 700
                    foreground: "#f8fafc", // Slate 50
                },
                muted: {
                    DEFAULT: "#1e293b", // Slate 800
                    foreground: "#94a3b8", // Slate 400
                },
                accent: {
                    DEFAULT: "#0ea5e9", // Sky 500
                    foreground: "#f8fafc",
                },
                card: {
                    DEFAULT: "#0f172a", // Slate 900
                    foreground: "#f8fafc", // Slate 50
                },
                border: "#1e293b", // Slate 800
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)"],
                mono: ["var(--font-geist-mono)"],
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out forwards",
                "slide-up": "slideUp 0.5s ease-out forwards",
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
