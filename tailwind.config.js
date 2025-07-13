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
  "primary": "#140C1C",        // dark background or brand color
  "secondary": "#000000",      // text color or hover contrast
  "accent": "#5A4EB0",         // links, buttons, hovers
  "base-100": "#ffffff",       // card or light section background
  "neutral": "#140C1C",        // similar to primary for consistent dark theme
  "neutral-focus": "#5A4EB0",  // highlight focus state
  "info": "#D4C0FB",           // soft lavender, can use in light badges or icons
  "success": "#36D399",        // optional, can stay default
  "warning": "#FBBD23",        // optional, can stay default
  "error": "#F87272",          // optional, can stay default
  "text-primary": "#D4C0FB"    // custom (not standard DaisyUI), used manually
}
,
      },
    ],
  },
};
