# Geospatial

A collection of Three.js-based geospatial visualizations, featuring an Earth atmosphere rendering demo.

## Atmosphere Demo

This demo showcases a realistic Earth atmosphere effect using the `@takram/three-atmosphere` [library](https://github.com/takram-design-engineering/three-geospatial/). The visualization includes:

- Realistic sky rendering with proper light scattering
- Dynamic sun and moon positioning
- Atmospheric perspective effects
- Interactive camera controls

<img width="1120" alt="Screenshot 2025-04-30 at 10 09 09 PM" src="https://github.com/user-attachments/assets/5a3f473e-b9f6-4721-ab08-5b5a0335f4b6" />

[Atmosphere Demo Preview](https://jeantimex.github.io/geospatial/)

## Technologies Used

- Three.js (v0.175.0)
- @takram/three-atmosphere (v0.11.1)
- @takram/three-geospatial (v0.2.0)
- @takram/three-geospatial-effects (v0.3.0)
- Postprocessing (v6.36.7)
- Vite (for development and building)

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn
- Google Maps JavaScript API key (for Tiles demo)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jeantimex/geospatial.git
   cd geospatial
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   VITE_GOOGLE_MAPS_JS_API_KEY=your_google_maps_api_key_here
   ```
   Replace `your_google_maps_api_key_here` with your actual Google Maps JavaScript API key.
   
   **Important:** Make sure to enable both the **Maps JavaScript API** and **Map Tiles API** for your API key in the Google Cloud Console.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173).

## Available Demos

- **Atmosphere**: A realistic Earth atmosphere visualization (https://jeantimex.github.io/geospatial/atmosphere.html). This is based on @takram/three-geospatial's Atmosphere Vanilla demo: https://takram-design-engineering.github.io/three-geospatial/?path=/story/atmosphere-atmosphere--vanilla.
- **Clouds**: Simulate the clouds visualization (https://jeantimex.github.io/geospatial/clouds.html). This is based on @takram/three-geospatial's Clouds Vanilla demo.
- **Deferred Lighting**: Use deferred lighting technique to render the atmosphere and a simple Three.JS torus knot object. (https://jeantimex.github.io/geospatial/deferred-lighting.html)
- **Tiles**: The vanilla implementation of rendering Google Photorealistic Tiles using [NASA-AMMOS/3DTilesRendererJS](https://github.com/NASA-AMMOS/3DTilesRendererJS) library. (https://jeantimex.github.io/geospatial/tiles.html)

## Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Credits

- Atmosphere rendering based on the [@takram/three-atmosphere](https://github.com/takram-design-engineering/takram-atmosphere) library
- Earth texture assets from [NASA Visible Earth](https://visibleearth.nasa.gov/)
- 3D tiles rendering from [NASA-AMMOS/3DTilesRendererJS](https://github.com/NASA-AMMOS/3DTilesRendererJS) library
- [Google Photorealistic Tiles API](https://developers.google.com/maps/documentation/tile/3d-tiles)

## License

MIT

## Author

Yong Su (jeantimex)
