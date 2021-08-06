import { defineConfig } from 'vite-plugin-windicss'
import typographyPlugin from 'windicss/plugin/typography'
import formsPlugin from 'windicss/plugin/forms'

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
    extend: {
      colors: {
        primary: '#4453C1',
        secandery: {
          100: '#5C5D67',
          200: '#3E3E49',
          300: '#DDDEE2',
        }
      }
    },
  },
})