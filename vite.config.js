import {resolve} from 'path'
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    WindiCSS(),
  ],

  server: {
    open: '/',
    port: 3636
  },

  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        // Add every html file respecting folder structure of your app
        index: resolve(__dirname ,'index.html'),
        indexEn: resolve(__dirname ,'index-en.html'),
        message: resolve(__dirname, 'merci.html'),
        messageEn: resolve(__dirname, 'thankyou.html'),
        // test: resolve(__dirname, 'projects/html/test.html'),
        // third: resolve(__dirname, 'third.html'),
        // fourth: resolve(__dirname, 'nested/fourth.html')

      }
    }
  }
}
