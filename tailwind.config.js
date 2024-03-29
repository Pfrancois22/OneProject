/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue-degrader-1': '#01a6b0',
        'blue-degrader-2': '#dcf9ff',
      }
    },
  },
  plugins: [],
};
