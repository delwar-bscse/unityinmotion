/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
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