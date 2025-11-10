/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#38BDF8",
        textSub: "#1E293B",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        bgUtama: "#F1F5F9",
        bgButton: "#1E3A8A",
        bgDivider: "#E2E8F0",
      },
      backgroundImage:{
        aboutSection: "url('./src/assets/imam.png')",
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
};
