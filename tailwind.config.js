/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryColor: "#52B5E6",
        secondaryColor: "#2A3744",
        tertiaryColor: "#1C242B",
      },
      backdropBlur: {
        20: "20px",
      },
    },
  },
  plugins: [],
};
