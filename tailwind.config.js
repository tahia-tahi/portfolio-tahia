import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        myportfolio: {
          "primary": "#f5df4e",
          "accent": "#1d2024",
          "base-100": "#F8F9FA",
          "secondary": "#212529",
          "neutral": "#1d2024",
          "neutral-focus": "#F8F9FA",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
};
