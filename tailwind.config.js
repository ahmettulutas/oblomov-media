/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      height: {
        0.25: '0.0625rem'
      },
      width: {
        0.25: '0.0625rem'
      },
      maxWidth: {
        '8xl': '90rem'
      },
      backgroundColor: {
        primary: '0000',
        secondary: '#111a21'
      },
      boxShadow: {
        nav: '0 2px 5px 0 rgba(0,0,0,0.1)'
      },
      colors: {
        primaryDark: '#1a1a1a',
        brandColor: 'var(--brand-color)',
        overLay: '#212020',
        borderTop: 'rgba(255,255,255,.03)'
      },
      fontFamily: {
        lato: 'Lato, Helvetica, Arial, sans-serif'
      },
      fontWeight: {
        bold: '700'
      }
    }


  },
  plugins: []
};
