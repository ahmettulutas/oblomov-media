/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      height: {
        0.25: "0.0625rem"
      },
      maxWidth: {
        "8xl": "90rem"
      },
      backgroundColor: {
        primary: "0000"
      },
      boxShadow: {
        nav: "0 2px 5px 0 rgba(0,0,0,0.1)"
      },
      colors: {
        primaryDark: "#1a1a1a",
        overLay: "#212020",
        borderTop: "rgba(255,255,255,.03)"
      }
    },
    fontFamily: {
      lato: "Lato, Helvetica, Arial, sans-serif"
    }

  },
  plugins: []
};