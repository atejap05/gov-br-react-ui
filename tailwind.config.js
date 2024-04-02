/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,mdx}"],
  important: true, // Add !important to all utilities (optional)
  theme: {
    extend: {
      colors: {
        teste01: "#FF6363",
        teste02: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
    },
  },
  plugins: [],
};
