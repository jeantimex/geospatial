import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        atmosphere: resolve(__dirname, 'atmosphere.html'),
        clouds: resolve(__dirname, 'clouds.html'),
        tiles: resolve(__dirname, 'tiles.html'),
      },
    },
  }, 
});
