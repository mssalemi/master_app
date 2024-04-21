/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // make sure Tailwind can purge correctly
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
