import {
  defineConfig
} from 'vite-plugin-windicss'
import typographyPlugin from 'windicss/plugin/typography'
import formsPlugin from 'windicss/plugin/forms'
import colors from 'windicss/colors'

export default defineConfig({
  attributify: true,
  darkMode: 'class',
  extract: {
    include: ['./**/*.html'],
  },
  safelist: ['prose', 'prose-sm', 'm-auto'],
  plugins: [
    typographyPlugin,
    formsPlugin,
    require('@windicss/plugin-icons'),
  ],
  theme: {
    fontFamily: {
      fredoka: ['Fredoka One']
    },
    container: {
      center: true,
      padding: {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'md': '4rem',
        'lg': '8rem',
        'xl': '10rem',
        '2xl': '12rem',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5A54FF',
          focus: '#4B369D',
        },
        secondary: {
          DEFAULT: '#F44E4E',
          focus: '#D7384E',
        },
        accent: {
          DEFAULT: '#FDC510',
          focus: '#F3AA02',
        },
        neutral: {
          DEFAULT: '#E3E5FC',
          focus: '#A7ADFF',   
        },
        base: colors.coolGray
      }
    },
  },
})