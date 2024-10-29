/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'md': '768px',
        'lg': '1440px',
      },
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
