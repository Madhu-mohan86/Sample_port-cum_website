/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/*{js,jsx,ts,tsx}"],
  theme: {
    patterns: {
    opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
    },
    sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
    },
    },
    extend:{
      fontFamily:{
        'Roboto':['Roboto','sans-serif'],
        'Fjalla':['Fjalla One','sans-serif'],
        'Inter':['Inter','sans-serif'],
        'Roboto_condensed':['Roboto Condensed','sans-serif'],
        'Fira_sans':['Fira Sans','sans-serif']
      },
      colors:{
        'background':'#D8CFC0',
        'text':'#98DF00',
    },
    top:{
     'middle':'135px',
    },
    textShadow: {
      sm: '0 1px 2px var(--tw-shadow-color)',
      DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      lg: '0 8px 16px var(--tw-shadow-color)',
    },
}
  },
  plugins: [
     require('tailwindcss-bg-patterns'), 
],
}

