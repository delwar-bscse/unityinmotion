/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Serif', 'serif'],
      },
      colors: {
        "primary": "#905A00",
        "secondary": "#F8F1E6",
        "font01": "#555555",
        "font02": "#B47000",
        "font03": "#F7F7F7",
      },
    },
  },
  plugins: [],
}