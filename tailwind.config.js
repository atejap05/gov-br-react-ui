/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,mdx}"],
  important: true, // Add !important to all utilities (optional)
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        rawline: ["Rawline", "Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
