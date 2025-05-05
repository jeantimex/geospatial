import { defineConfig } from 'vite';
import { resolve } from 'path';

// Get the repository name from package.json or environment variable
const getBase = () => {
  // For GitHub Pages, use the repository name as the base
  // You can replace 'geospatial' with your actual repository name if different
  return '/geospatial/';
};

export default defineConfig({
  base: getBase(),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        atmosphere: resolve(__dirname, 'atmosphere.html'),
        clouds: resolve(__dirname, 'clouds.html'),
        tiles: resolve(__dirname, 'tiles.html'),
        'deferred-lighting': resolve(__dirname, 'deferred-lighting.html'),
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
});
