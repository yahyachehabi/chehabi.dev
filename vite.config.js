import WindiCSS from 'vite-plugin-windicss'
import path from "path";
import glob from "glob";

export default {
  plugins: [
    WindiCSS(),
  ],
  server: {
    open: '/',
    port: 3636
  },
  root: __dirname,
  build: {
        outDir: path.join(__dirname, "build"),
        rollupOptions: {
          input: glob.sync(path.resolve(__dirname, "**/*.html")),
        },
    },
}
