/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "770px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
