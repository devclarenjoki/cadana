module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '320px',

      'md': '640px',

      'lg': '768px',

      'xl': '1024px',

      '2xl': '1280px',
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor:["active", "focus", "hover"],
      borderColor:['hover', 'focus', 'active'],
      boxShadow:["responsive", "hover", "focus", "active"],
      outline:["hover", "active"],
      appearance:["active", "focus", "hover"],
    },
  },
  plugins: [],

}
