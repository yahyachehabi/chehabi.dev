module.exports = {
  // mode: 'jit',
  // content: ['./src/**/*.html'],
   purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        body: ['Merriweather'],
        titre:['nonito1']
        
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  fontFamily: {
       'sans': ['Montserrat','ui-sans-serif', 'system-ui'],
      }
}
