/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem"
      },
      boxShadow: {
        nav: "0 2px 5px 0 rgba(0,0,0,0.1)"
      },
      colors: {
        primaryDark: "#1a1a1a",
        overLay: "rgba(35,35,35,.5)",
        borderTop: "rgba(255,255,255,.03)"
      }
    },
    fontFamily: {
      lato: "Lato, Helvetica, Arial, sans-serif"
    }

  },
  plugins: []
};
