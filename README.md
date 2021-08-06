<p align='center'>
  <img src='https://vitejs.dev/logo.svg' alt='Vite' width='100'/>
  <img src='https://windicss.org/assets/logo.svg' alt='Vite' width='100'/>
</p>

<h2 align='center'>
ViteWind boilerplate
</h2>

<br>

<p align='center'>
<a href="https://vitewind.netlify.app/">Live Demo</a>
</p>



## Features

- ⚡️ [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/) - born with fastness
- 🎨 [Windi CSS](https://github.com/windicss/windicss) - next generation utility-first CSS framework
- 😃 [Use icons from https://css.gg/app](https://css.gg/app)
- ☁️ Deploy on Netlify, zero-config

<br>

## Pre-packed

### UI Frameworks

- [Windi CSS](https://github.com/windicss/windicss) (On-demand [TailwindCSS](https://tailwindcss.com/)) - lighter and faster, with a bunch of additional features!
  - [Windi CSS Typography](https://windicss.org/plugins/official/typography.html)
  - [Windi CSS Forms](https://windicss.org/plugins/official/forms.html)
  - [Windi CSS Icons](https://github.com/windicss/plugins/tree/main/packages/icons)

### Icons

- [Windi CSS Icons](https://iconify.design) - use icons from icon sets [ 🔍 Icônes](https://github.com/windicss/plugins/tree/main/packages/icons#available-icons-classes)

## Try it now!

### Clone to local

```bash
git clone https://github.com/chkilel/vite-wind-boilerplate.git
cd vite-wind-boilerplate
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```
## Usage

## Multi-Page App
Suppose you have the following source code structure:

```
├── package.json
├── vite.config.js
├── index.html
├── second.html
├── third.html
├── ...
└── nested
    ├── fourth.html
    └── ...
```

During dev, simply navigate or link to `/nested/` - it works as expected, just like for a normal static file server.

During build, all you need to do is to specify multiple `.html` files as entry points:

```js
// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname ,'index.html'),
        second: resolve(__dirname, 'second.html'),
        third: resolve(__dirname, 'third.html'),
        fourth: resolve(__dirname, 'nested/fourth.html')
      }
    }
  }
})
```

`__dirname` will be the folder of your vite.config.js file when resolving the input paths.

### Development

Just run and visit http://localhost:3636

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your repo, `OK` along the way, and your App will be live in a minute.
