/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        animation: {
          "ripple-box": "ripple-box 0.6s ease-out forwards",
          "fade-in-up": "fade-in-up 0.5s ease-out forwards",
          "pop-in": "pop-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
          "win-pulse": "win-pulse 1.5s ease-in-out infinite",
          "status-slide": "status-slide 0.3s ease-out forwards",
        },
        keyframes: {
          "ripple-box": {
            "0%": { opacity: "1", transform: "scale(0.5)" },
            "100%": { opacity: "0", transform: "scale(2.5)" },
          },
          "fade-in-up": {
            "0%": { opacity: "0", transform: "translateY(12px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
          "pop-in": {
            "0%": { transform: "scale(0) rotate(-10deg)", opacity: "0" },
            "60%": { transform: "scale(1.15) rotate(3deg)" },
            "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
          },
          "win-pulse": {
            "0%, 100%": { boxShadow: "0 0 0 0 rgba(167, 139, 250, 0)" },
            "50%": { boxShadow: "0 0 20px 4px rgba(167, 139, 250, 0.35)" },
          },
          "status-slide": {
            "0%": { opacity: "0", transform: "translateY(-8px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
        },
      },
    },
    plugins: [],
  };
  