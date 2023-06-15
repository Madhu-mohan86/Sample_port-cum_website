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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
    animation: {
      cursor: 'cursor .6s linear infinite alternate',
      type: 'type 1.8s ease-out .8s 1 normal both',
      'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
    },
    keyframes: {
      type: {
        '0%': { width: '0ch' },
        '5%, 10%': { width: '1ch' },
        '15%, 20%': { width: '2ch' },
        '25%, 30%': { width: '3ch' },
        '35%, 40%': { width: '4ch' },
        '45%, 50%': { width: '5ch' },
        '55%, 60%': { width: '6ch' },
        '65%, 70%': { width: '7ch' },
        '75%, 80%': { width: '8ch' },
        '85%, 90%': { width: '9ch' },
        '95%': { width: '10ch' },
        
      },
    },

}
  },
  plugins: [
     require('tailwindcss-bg-patterns'), 
],
}

