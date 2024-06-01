/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"]
      }
    },
    colors: {
      softBlue: 'var(--SoftBlue)',
      cyan: 'var(--Cyan)',
      cyanLight: 'var(--CyanLight)',
      veryDarkBlueMainBG: 'var(--VeryDarkBlueMainBG)',
      veryDarkBlueCardBG: 'var(--VeryDarkBlueCardBG)',
      veryDarkBlueLine: 'var(--VeryDarkBlueLine)',
      white: 'var(--White)'
   

    }
  },
  plugins: [],
}

