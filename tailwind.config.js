/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // make sure Tailwind can purge correctly
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate"],
  },
};
