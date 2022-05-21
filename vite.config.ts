import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@honkhonk/vite-plugin-svgr';
import {join} from 'path';

const PACKAGE_ROOT = __dirname;

// https://vitejs.dev/config/
export default defineConfig({
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      '@/': join(PACKAGE_ROOT, 'src') + '/',
    },
  },
  plugins: [
    svgr(),
    react({
      babel: {
        parserOpts: {
          plugins: ['decorators-legacy'],
        },
      },
    }),
  ],
  base: './',
});
