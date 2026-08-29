/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#0F4C4C",
          50: "#E1F5EE",
          100: "#BEE6DA",
          400: "#1F9090",
          600: "#0F4C4C",
          700: "#0B3939",
          900: "#062626",
        },
        cream: {
          DEFAULT: "#F7F3EC",
          soft: "#F2ECE0",
          card: "#FFFFFF",
        },
        plum: {
          DEFAULT: "#3D2645",
          light: "#6B4478",
          pale: "#F0DBED",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
