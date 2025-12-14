import { defineConfig } from 'vite'
import glob from 'glob'
import injectHTML from 'vite-plugin-html-inject'
import FullReload from 'vite-plugin-full-reload'

// export default defineConfig({
//   define: {
//     global: {},
//   },
//   root: 'src',
//   build: {
//     rollupOptions: {
//       input: glob.sync('./src/*.html'),
//     },
//     outDir: '../dist',
//   },
//   plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
// })


export default defineConfig({
  base: '/projectgreens/', // ← назва репозиторію
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
  },
  plugins: [
    injectHTML(),
    FullReload(['./src/**/*.html'])
  ],
})