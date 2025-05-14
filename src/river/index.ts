import * as THREE from "three";
import { Globe } from "../globe";
import { WGS84_ELLIPSOID } from "3d-tiles-renderer"; // Assuming Globe class is exported from here

interface GeoJSONFeature {
  type: string;
  properties: any;
  geometry: {
    type: string;
    coordinates: any; // Can be number[][] for LineString, number[][][] for MultiLineString
  };
}

interface GeoJSONFile {
  type: string;
  features: GeoJSONFeature[];
}

/**
 * Projects longitude/latitude coordinates to 3D world coordinates using the Globe instance.
 * Assumes GeoJSON coordinates are [longitude, latitude].
 */
function projectCoordinates(coords: number[][], globe: Globe): THREE.Vector3[] {
  return coords.map(coord => {
    const [longitude, latitude] = coord;
    const position = new THREE.Vector3();
    
    // Convert from geographic coordinates to Cartesian coordinates
    // using the same method as LasVegasSphere
    WGS84_ELLIPSOID.getCartographicToPosition(
      latitude * THREE.MathUtils.DEG2RAD,  // latitude in radians
      longitude * THREE.MathUtils.DEG2RAD, // longitude in radians
      50, // altitude in meters - lifted higher above the terrain
      position
    );
    
    // Apply the tiles matrix world transformation
    if (globe.tiles && globe.tiles.group) {
      globe.tiles.group.updateWorldMatrix(true, false);
      position.applyMatrix4(globe.tiles.group.matrixWorld);
    }
    
    return position;
  });
}

export async function createRiverMesh(
  geojsonPath: string,
  globe: Globe,
  riverColor: THREE.ColorRepresentation = 0xff0000,
  riverRadius: number = 150 // Width in meters to match the actual Thames River width (approx 300m)
): Promise<THREE.Group | null> {
  try {
    const response = await fetch(geojsonPath);
    if (!response.ok) {
      console.error(`Failed to fetch GeoJSON: ${response.statusText}`);
      return null;
    }
    const geojsonData = (await response.json()) as GeoJSONFile;

    if (!geojsonData || !geojsonData.features || geojsonData.features.length === 0) {
      console.error('GeoJSON data is empty or invalid.');
      return null;
    }

    const riverGroup = new THREE.Group();
    // Create a material for the river
    // Using MeshBasicMaterial for a flat, unshaded appearance
    const material = new THREE.MeshBasicMaterial({ 
      color: riverColor,
      side: THREE.DoubleSide // Render both sides of the ribbon
    });

    for (const feature of geojsonData.features) {
      if (feature.geometry.type === 'LineString' || feature.geometry.type === 'MultiLineString') {
        let coordinateSets: number[][][];
        
        if (feature.geometry.type === 'LineString') {
          // For LineString, wrap the coordinates in an array to match MultiLineString format
          coordinateSets = [feature.geometry.coordinates as number[][]];
        } else {
          // For MultiLineString, use as is
          coordinateSets = feature.geometry.coordinates as number[][][];
        }

        // Process each line segment
        for (const coordinates of coordinateSets) {
          if (coordinates.length < 2) continue;
          
          // Convert GeoJSON coordinates to Three.js Vector3 points
          const centerPoints = projectCoordinates(coordinates, globe);
          
          // Create a flat ribbon geometry
          const geometry = createRibbonGeometry(centerPoints, riverRadius);
          const mesh = new THREE.Mesh(geometry, material);
          riverGroup.add(mesh);
        }
      }
    }
    
    // Helper function to create a ribbon geometry from center points and width
    function createRibbonGeometry(centerPoints: THREE.Vector3[], halfWidth: number): THREE.BufferGeometry {
      const geometry = new THREE.BufferGeometry();
      const vertices: number[] = [];
      const indices: number[] = [];
      
      if (centerPoints.length < 2) return geometry;
      
      // For each center point, create two vertices (one on each side of the river)
      for (let i = 0; i < centerPoints.length; i++) {
        const current = centerPoints[i];
        
        // Calculate direction vector
        let direction = new THREE.Vector3();
        
        if (i === 0) {
          // First point - use direction to next point
          direction.subVectors(centerPoints[i + 1], current).normalize();
        } else if (i === centerPoints.length - 1) {
          // Last point - use direction from previous point
          direction.subVectors(current, centerPoints[i - 1]).normalize();
        } else {
          // Middle points - average direction between previous and next
          const prev = new THREE.Vector3().subVectors(current, centerPoints[i - 1]).normalize();
          const next = new THREE.Vector3().subVectors(centerPoints[i + 1], current).normalize();
          direction.addVectors(prev, next).normalize();
        }
        
        // Calculate perpendicular vector in the horizontal plane
        // We need to ensure the perpendicular is roughly parallel to the globe's surface
        const up = new THREE.Vector3().copy(current).normalize(); // Direction to center of globe
        const perpendicular = new THREE.Vector3().crossVectors(direction, up).normalize();
        
        // Create vertices on both sides of the center line
        const left = new THREE.Vector3().copy(current).addScaledVector(perpendicular, halfWidth);
        const right = new THREE.Vector3().copy(current).addScaledVector(perpendicular, -halfWidth);
        
        // Add vertices
        vertices.push(left.x, left.y, left.z);
        vertices.push(right.x, right.y, right.z);
      }
      
      // Create triangles (two triangles for each quad between adjacent points)
      for (let i = 0; i < centerPoints.length - 1; i++) {
        const baseIndex = i * 2;
        
        // First triangle (left-right-left)
        indices.push(baseIndex, baseIndex + 1, baseIndex + 2);
        
        // Second triangle (left-right-right)
        indices.push(baseIndex + 2, baseIndex + 1, baseIndex + 3);
      }
      
      // Set attributes
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      geometry.setIndex(indices);
      geometry.computeVertexNormals();
      
      return geometry;
    }
    riverGroup.name = "RiverThames";
    
    // Add a debug sphere at the first vertex of the river using WGS84_ELLIPSOID
    if (geojsonData.features.length > 0 && geojsonData.features[0].geometry.coordinates.length > 0) {
      const firstCoord = geojsonData.features[0].geometry.coordinates[0];
      const [longitude, latitude] = firstCoord;
      const firstVertex = new THREE.Vector3();
      
      // Convert from geographic coordinates to Cartesian coordinates
      WGS84_ELLIPSOID.getCartographicToPosition(
        latitude * THREE.MathUtils.DEG2RAD,  // latitude in radians
        longitude * THREE.MathUtils.DEG2RAD, // longitude in radians
        100, // altitude in meters - higher to make it more visible
        firstVertex
      );
      
      // Apply the tiles matrix world transformation
      if (globe.tiles && globe.tiles.group) {
        globe.tiles.group.updateWorldMatrix(true, false);
        firstVertex.applyMatrix4(globe.tiles.group.matrixWorld);
      }
      
      // Create a bright green sphere
      const sphereGeometry = new THREE.SphereGeometry(100, 16, 16); // 100 meters radius
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Bright green
      const debugSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      
      // Position the sphere at the first vertex
      debugSphere.position.copy(firstVertex);
      debugSphere.name = "DebugSphere";
      
      // Add the sphere to the scene directly, not as a child of riverGroup
      // This ensures it's not affected by any scaling or other transformations
      riverGroup.add(debugSphere);
      
      console.log("Debug sphere added at:", firstVertex);
    }
    
    return riverGroup;
  } catch (error) {
    console.error('Error processing river GeoJSON:', error);
    return null;
  }
}