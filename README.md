# Geospatial

A collection of Three.js-based geospatial visualizations, featuring an Earth atmosphere rendering demo.

## Atmosphere Demo

This demo showcases a realistic Earth atmosphere effect using the `@takram/three-atmosphere` library. The visualization includes:

- Realistic sky rendering with proper light scattering
- Dynamic sun and moon positioning
- Atmospheric perspective effects
- Interactive camera controls

![Atmosphere Demo Preview](./preview.png)

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

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173).

## Available Demos

- **Atmosphere**: A realistic Earth atmosphere visualization (atmosphere.html)

## Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Credits

- Atmosphere rendering based on the [@takram/three-atmosphere](https://github.com/takram-design-engineering/takram-atmosphere) library
- Earth texture assets from [NASA Visible Earth](https://visibleearth.nasa.gov/)

## License

MIT

## Author

Yong Su (jeantimex)
