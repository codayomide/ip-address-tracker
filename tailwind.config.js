/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        veryDarkGray: "hsl(0, 0%, 17%)",
        darkGray: "hsl(0, 0%, 59%)",
        neutralWhite: "hsl(0, 0%, 100%)",
      },
      screens: {
        "mo-xs": "0px",
        "mo-sm": "350px",
        "mo-md": "475px",
        "mo-lg": "576px",
      },
    },
    backgroundImage: {
      "image-mobile-bg": "url('src/assets/images/pattern-bg-mobile.png')",
      "image-desktop-bg": "url('src/assets/images/pattern-bg-desktop.png')",
    },
  },
  plugins: [],
};
